const AssessmentSetting = require('../models/assessmentSettings');

const getAllAssessmentSettings = async() => {
    return await AssessmentSetting.getAll();
};

const getAssessmentSettingById = async(id_assessment_setting) => {
    return await AssessmentSetting.getById(id_assessment_setting);
};

const createAssessmentSetting = async(data) => {
    return await AssessmentSetting.create(data);
};

const updateAssessmentSetting = async(id_assessment_setting, data) => {
    return await AssessmentSetting.update(id_assessment_setting, data);
};

const deleteAssessmentSetting = async(id_assessment_setting) => {
    return await AssessmentSetting.delete(id_assessment_setting);
};

module.exports = {
    getAllAssessmentSettings,
    getAssessmentSettingById,
    createAssessmentSetting,
    updateAssessmentSetting,
    deleteAssessmentSetting
};