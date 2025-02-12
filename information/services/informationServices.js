const Information = require('../models/informations');

const getAllInformation = async() => {
    return await Information.getAll();
};

const getInformationById = async(id) => {
    return await Information.getById(id);
};

const createInformation = async(data) => {
    return await Information.create(data);
};

const updateInformation = async(id, data) => {
    return await Information.update(id, data);
};

const deleteInformation = async(id) => {
    return await Information.delete(id);
};

module.exports = {
    getAllInformation,
    getInformationById,
    createInformation,
    updateInformation,
    deleteInformation
};