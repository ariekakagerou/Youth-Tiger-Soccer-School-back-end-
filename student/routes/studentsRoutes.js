const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentControllers');
const multer = require('multer');

// Konfigurasi multer
const storage = multer.diskStorage({
    destination: function(_req, _file, cb) {
        cb(null, 'uploads/image/'); // Tentukan folder penyimpanan
    },
    filename: function(_req, _file, cb) {
        cb(null, Date.now() + '-' + _file.originalname); // Tentukan nama file
    }
});

const fileFilter = (_req, _file, cb) => {
    // Terima hanya file dengan format jpg atau png
    if (_file.mimetype === 'image/jpeg' || _file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('File format should be JPG or PNG'), false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 100
    },
    fileFilter: fileFilter
});

// GET all students
router.get('/', studentController.getAllStudents);

// GET a student by ID
router.get('/:id_student', studentController.getStudentById);

// POST a new student
router.post('/', upload.single('photo'), studentController.createStudent);

// PUT update a student
router.put('/:id_student', upload.single('photo'), studentController.updateStudent);

// DELETE a student
router.delete('/:id_student', studentController.deleteStudent);

// Rute untuk logout
router.post('/logout/:id_student', studentController.logout);

// POST login student
router.post('/login', studentController.login);

module.exports = router;