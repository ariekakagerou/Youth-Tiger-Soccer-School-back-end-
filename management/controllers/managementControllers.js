const ManagementService = require('../services/managementServices');
const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key';

// GET all management records
exports.getAllManagements = async(_req, res) => {
    const managements = await ManagementService.getAllManagements();
    res.json(managements);
};

// GET a management record by ID
exports.getManagementById = async(req, res) => {
    const management = await ManagementService.getManagementById(req.params.id_management);
    if (management) {
        res.json(management);
    } else {
        res.sendStatus(404);
    }
};

// POST a new management record
exports.createManagement = async(req, res) => {
    const { name, gender, date_birth, email, nohp, id_departement } = req.body;
    try {
        const newManagement = await ManagementService.createManagement(name, gender, date_birth, email, nohp, id_departement);

        // Ubah respons untuk menggunakan id_management
        const response = {
            id_management: newManagement.id, // Ganti id dengan id_management
            name: newManagement.name,
            gender: newManagement.gender,
            date_birth: newManagement.date_birth,
            email: newManagement.email,
            nohp: newManagement.nohp,
            id_departement: newManagement.id_departement,
            status: newManagement.status
        };

        res.status(201).json(response);
    } catch (error) {
        console.error(error); // Log error untuk debugging
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// PUT update a management record
exports.updateManagement = async(req, res) => {
    const { name, gender, date_birth, email, nohp, id_departement, status } = req.body;
    try {
        await ManagementService.updateManagement(req.params.id, name, gender, date_birth, email, nohp, id_departement, status);
        res.json({ message: 'Management successfully updated' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// DELETE a management record
exports.deleteManagement = async(req, res) => {
    try {
        await ManagementService.deleteManagement(req.params.id);
        res.json({ message: 'Management successfully deleted' }); // Notification successfully deleted
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// POST login
exports.login = async(req, res) => {
    const { email, nohp } = req.body;
    try {
        const management = await ManagementService.getManagementByEmail(email);
        if (management) {
            if (management.nohp === nohp) {
                const token = jwt.sign({ id_management: management.id_management }, secretKey, { expiresIn: '1h' });

                // Set status to 1 (active) on successful login
                await ManagementService.updateManagement(management.id_management, {
                    status: 1
                });

                res.json({
                    id_management: management.id_management,
                    name: management.name,
                    gender: management.gender,
                    date_birth: management.date_birth,
                    email: management.email,
                    nohp: management.nohp,
                    id_departement: management.id_departement,
                    status: 1, // Status online
                    token: token
                });
            } else {
                return res.status(401).json({ error: 'Nomor handphone tidak valid.' });
            }
        } else {
            return res.status(404).json({ error: 'Manajemen tidak ditemukan.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
    }
};

exports.logout = async(req, res) => {
    const managementId = req.params.id_management;
    try {
        // Set status to 0 (inactive) on logout
        await ManagementService.updateManagement(managementId, { status: 0 });
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};