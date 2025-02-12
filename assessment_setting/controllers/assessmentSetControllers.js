const AssessmentSetService = require('../services/assessmentSetServices');

const getAllAssessmentSettings = async(_req, res) => {
    try {
        const data = await AssessmentSetService.getAllAssessmentSettings();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAssessmentSettingById = async(req, res) => {
    try {
        const data = await AssessmentSetService.getAssessmentSettingById(req.params.id_assessment_setting);
        if (data.length === 0) {
            return res.status(404).json({ message: 'Assessment setting not found' });
        }
        res.json(data[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createAssessmentSetting = async(req, res) => {
    try {
        const result = await AssessmentSetService.createAssessmentSetting(req.body);
        const newAssessmentSetting = await AssessmentSetService.getAssessmentSettingById(result.id);
        res.status(201).json(newAssessmentSetting);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateAssessmentSetting = async(req, res) => {
    try {
        await AssessmentSetService.updateAssessmentSetting(req.params.id_assessment_setting, req.body);
        const updatedAssessmentSetting = await AssessmentSetService.getAssessmentSettingById(req.params.id_assessment_setting);
        res.json({
            message: 'Assessment setting updated successfully',
            data: updatedAssessmentSetting
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteAssessmentSetting = async(req, res) => {
    try {
        await AssessmentSetService.deleteAssessmentSetting(req.params.id_assessment_setting);
        res.json({ message: 'Assessment setting deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllAssessmentSettings,
    getAssessmentSettingById,
    createAssessmentSetting,
    updateAssessmentSetting,
    deleteAssessmentSetting
};