const express = require('express');
const router = express.Router();
const managementController = require('../controllers/managementControllers');
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

// GET all management records
router.get('/', managementController.getAllManagements);

// GET a management record by ID
router.get('/:id_management', managementController.getManagementById);

// POST a new management record
router.post('/', upload.single('photo'), managementController.createManagement);

// PUT update a management record
router.put('/:id_management', upload.single('photo'), managementController.updateManagement);

// DELETE a management record
router.delete('/:id_management', managementController.deleteManagement);

// POST login
router.post('/login', managementController.login);

// POST logout
router.post('/logout/:id_management', managementController.logout);

module.exports = router;