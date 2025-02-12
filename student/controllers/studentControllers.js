const StudentService = require('../services/studentServices');
const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key';

// GET all students
exports.getAllStudents = async(_req, res) => {
    try {
        const students = await StudentService.getAllStudents();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET a student by ID
exports.getStudentById = async(req, res) => {
    try {
        console.log("Mencari siswa dengan ID:", req.params.id_student);
        const student = await StudentService.getStudentById(req.params.id_student);
        if (student) {
            res.json(student);
        } else {
            console.log("Siswa tidak ditemukan");
            res.sendStatus(404);
        }
    } catch (error) {
        console.error("Error mendapatkan siswa:", error);
        res.status(500).json({ error: error.message });
    }
};

// POST a new student
exports.createStudent = async(req, res) => {
    const { name, date_birth, gender, photo, email, nohp } = req.body;

    // Pastikan semua data yang diperlukan ada
    if (!name || !email || !nohp) {
        return res.status(400).json({ error: 'name, email, nohp are required.' });
    }

    // Menghasilkan id_student dengan awalan "YRA"
    const id_student = `YRA${Date.now()}`; // Menggunakan timestamp untuk memastikan unik

    const newStudentData = {
        id_student,
        name,
        date_birth,
        gender,
        photo,
        email,
        nohp,
        registration_date: new Date().toISOString().slice(0, 10), // Tanggal saat ini
        status: 1, // Status default adalah 1 (online)
        position: null, // Posisi tidak diatur saat pendaftaran
        assigned_by_coach: null // Belum ditentukan oleh pelatih
    };

    try {
        // Cek apakah siswa sudah ada berdasarkan email
        const existingStudent = await StudentService.getByEmail(email);
        if (existingStudent) {
            return res.status(400).json({ error: 'Student with this email already exists.' });
        }

        // Jika tidak ada, lanjutkan untuk menambahkan siswa baru
        const student = await StudentService.createStudent(newStudentData);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// PUT update a student
exports.updateStudent = async(req, res) => {
    console.log("Update student called with ID:", req.params.id_student); // Tambahkan log ini
    const { id_student } = req.params; // Ambil id_student dari parameter URL
    const { name, date_birth, photo, email, nohp } = req.body;

    // Buat objek untuk menyimpan data yang akan diperbarui
    const updatedData = {};

    // Tambahkan field yang ada ke updatedData jika ada
    if (name) updatedData.name = name;
    if (date_birth) updatedData.date_birth = date_birth;
    if (photo) updatedData.photo = photo;
    if (email) updatedData.email = email;
    if (nohp) updatedData.nohp = nohp;

    // Pastikan setidaknya satu data yang ingin diperbarui ada
    if (Object.keys(updatedData).length === 0) {
        return res.status(400).json({ error: 'At least one field (name, date_birth, photo, email, nohp) must be provided for update.' });
    }

    try {
        // Perbarui data siswa di database
        const result = await StudentService.updateStudent(id_student, updatedData);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Student not found.' });
        }
        res.json({ message: 'Student updated successfully.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE a student
exports.deleteStudent = async(req, res) => {
    try {
        await StudentService.deleteStudent(req.params.id);
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// POST login
exports.login = async(req, res) => {
    const { email, date_birth } = req.body;
    try {
        const student = await StudentService.getByEmail(email);
        if (student) {
            const studentDateOfBirth = new Date(student.date_birth).toISOString().slice(0, 10);
            if (studentDateOfBirth === date_birth) {
                const token = jwt.sign({ id_student: student.id_student }, secretKey, { expiresIn: '1h' });

                // Set status to 1 (active) on successful login
                await StudentService.updateStudent(student.id_student, { status: 1 });

                res.json({
                    id_student: student.id_student,
                    name: student.name,
                    date_birth: student.date_birth,
                    gender: student.gender,
                    photo: student.photo,
                    email: student.email,
                    nohp: student.nohp,
                    status: 1, // Status online
                    token: token
                });
            } else {
                return res.status(401).json({ error: 'Invalid date of birth.' });
            }
        } else {
            return res.status(404).json({ error: 'Student not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST logout
exports.logout = async(req, res) => {
    const studentId = req.params.id_student;
    try {
        // Set status to 0 (inactive) on logout
        await StudentService.updateStudent(studentId, { status: 0 });
        res.json({ message: 'Student logged out successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};