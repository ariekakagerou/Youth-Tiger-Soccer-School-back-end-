const express = require('express');
const router = express.Router();
const assessmentSetController = require('../controllers/assessmentSetControllers');

// GET all assessment settings
router.get('/', assessmentSetController.getAllAssessmentSettings);

// GET an assessment setting by ID
router.get('/:id_assessment_setting', assessmentSetController.getAssessmentSettingById);

// POST a new assessment setting
router.post('/', assessmentSetController.createAssessmentSetting);

// PUT update an assessment setting
router.put('/:id_assessment_setting', assessmentSetController.updateAssessmentSetting);

// DELETE an assessment setting
router.delete('/:id_assessment_setting', assessmentSetController.deleteAssessmentSetting);

module.exports = router;