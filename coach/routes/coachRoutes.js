const express = require('express');
const router = express.Router();
const coachController = require('../controllers/coachControllers');
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

// GET all coaches
router.get('/', coachController.getAllCoaches);

// GET a coach by ID
router.get('/:id_coach', coachController.getCoachById);

// POST a new coach
router.post('/', upload.single('photo'), coachController.createCoach);

// PUT update a coach
router.put('/:id_coach', upload.single('photo'), coachController.updateCoach);

// DELETE a coach
router.delete('/:id_coach', coachController.deleteCoach);

// POST login
router.post('/login', coachController.login);

// POST logout
router.post('/logout/:id_coach', coachController.logout);

module.exports = router;