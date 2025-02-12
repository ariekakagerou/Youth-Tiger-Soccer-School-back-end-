const DepartementService = require('../services/departementsServices');

// GET all departements
exports.getAllDepartements = async(_, res) => {
    const departements = await DepartementService.getAllDepartements();
    res.json(departements);
};

// GET a departement by ID
exports.getDepartementById = async(req, res) => {
    const departement = await DepartementService.getDepartementById(req.params.id_departement);
    if (departement) {
        res.json(departement);
    } else {
        res.sendStatus(404);
    }
};

// POST a new departement
exports.createDepartement = async(req, res) => {
    const { name_departement, status } = req.body;
    const newDepartement = await DepartementService.createDepartement(name_departement, status);
    res.status(201).json(newDepartement);
};

// PUT update a departement
exports.updateDepartement = async(req, res) => {
    const { name_departement, status } = req.body;
    await DepartementService.updateDepartement(req.params.id_departement, name_departement, status);
    res.sendStatus(204);
};

// DELETE a departement
exports.deleteDepartement = async(req, res) => {
    await DepartementService.deleteDepartement(req.params.id_departement);
    res.sendStatus(204);
};