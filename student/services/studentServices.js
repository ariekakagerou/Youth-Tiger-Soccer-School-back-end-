const Student = require('../models/students');
const db = require('../../config/db');


function generateId() {
    return `YRA${Date.now()}`; // Menghasilkan ID berdasarkan timestamp
}

class StudentService {
    static async getAllStudents() {
        return await Student.getAll();
    }

    static async getStudentById(id_student) {
        return await Student.getById(id_student);
    }

    static async createStudent(studentData) {
        console.log("Received student data:", studentData);

        const { name, email, date_birth, nohp, gender, photo } = studentData;

        // Cek apakah siswa dengan email yang sama sudah ada
        const existingStudent = await this.getByEmail(email);
        if (existingStudent) {
            return existingStudent; // Kembalikan data yang sudah ada
        }

        // Menghasilkan ID unik yang dimulai dengan "YRA"
        const newStudentId = `YRA${Math.floor(Math.random() * 1000000)}`; // Menghasilkan ID acak

        const newStudentData = {
            id_student: newStudentId, // Menggunakan ID yang baru dihasilkan
            name,
            date_birth: new Date(date_birth).toISOString().slice(0, 10), // Format tanggal
            gender,
            photo,
            email,
            nohp,
            registration_date: new Date().toISOString().slice(0, 10), // Tanggal saat ini
            status: 1 // Status diatur menjadi 1
        };

        console.log("New student data to insert:", newStudentData);

        // Simpan ke database dan kembalikan data siswa yang baru dibuat
        const createdStudent = await Student.create(newStudentData);
        return createdStudent; // Pastikan ini mengembalikan semua atribut yang diinginkan
    }

    static async updateStudent(id_student, updatedData) {
        const fields = Object.keys(updatedData)
            .filter(key => updatedData[key] !== undefined) // Hanya ambil field yang ada
            .map(key => `${key} = ?`).join(', '); // Buat string untuk query

        const values = Object.values(updatedData).filter(value => value !== undefined); // Ambil nilai yang ada
        values.push(id_student); // Tambahkan id_student ke akhir values untuk WHERE clause

        const query = `UPDATE student SET ${fields} WHERE id_student = ?`;
        console.log("Executing query:", query, "Values:", values); // Tambahkan log ini

        // Memperbaiki penggunaan variabel query
        const [result] = await db.query(query, values); // Tambahkan await dan return result
        return result; // Kembalikan hasil dari query
    }

    static async deleteStudent(id) {
        await Student.delete(id);
    }

    static async logout(studentId) {
        // Logika untuk mengubah status siswa menjadi tidak aktif
        await Student.updateStatus(studentId, 0); // Misalnya, set status ke 0
    }

    static async getByEmail(email) {
        const [rows] = await db.query('SELECT * FROM student WHERE email = ?', [email]);
        return rows.length > 0 ? rows[0] : null; // Mengembalikan siswa pertama yang ditemukan atau null
    }

    static async updateStudent(id_student, studentData) {
        const { status } = studentData;
        await Student.update(id_student, status);
    }
}

module.exports = StudentService;