const express = require('express');
const router = express.Router();
const {
    getAllAssessments,
    getAssessmentById,
    createAssessment,
    updateAssessment,
    deleteAssessment
} = require('../controllers/assessmentControllers');

router.get('/', getAllAssessments);
router.get('/:id_assessment', getAssessmentById);
router.post('/', createAssessment);
router.put('/:id_assessment', updateAssessment);
router.delete('/:id_assessment', deleteAssessment);

module.exports = router;