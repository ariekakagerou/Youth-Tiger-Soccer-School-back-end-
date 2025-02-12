const Assessment = require('../models/assessments');

const getAllAssessments = async() => {
    return await Assessment.getAll();
};

const getAssessmentById = async(id_assessment) => {
    return await Assessment.getById(id_assessment);
};

const createAssessment = async(data) => {
    return await Assessment.create(data);
};

const updateAssessment = async(id_assessment, data) => {
    return await Assessment.update(id_assessment, data);
};

const deleteAssessment = async(id_assessment) => {
    return await Assessment.delete(id_assessment);
};

module.exports = {
    getAllAssessments,
    getAssessmentById,
    createAssessment,
    updateAssessment,
    deleteAssessment
};