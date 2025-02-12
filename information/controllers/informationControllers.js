const Information = require('../models/informations');

const getAllInformation = async(_req, res) => {
    const data = await Information.getAll();
    res.json(data);
};

const getInformationById = async(req, res) => {
    const data = await Information.getById(req.params.id_information);
    res.json(data);
};

const createInformation = async(req, res) => {
    try {
        const result = await Information.create(req.body);
        const newInformation = await Information.getById(result.id);
        res.status(201).json(newInformation);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateInformation = async(req, res) => {
    try {
        await Information.update(req.params.id_information, req.body);
        res.json({ message: 'Information updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteInformation = async(req, res) => {
    await Information.delete(req.params.id_information);
    res.status(204).send();
};

module.exports = {
    getAllInformation,
    getInformationById,
    createInformation,
    updateInformation,
    deleteInformation
};