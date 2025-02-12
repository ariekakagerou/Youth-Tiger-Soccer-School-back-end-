const express = require('express');
const router = express.Router();
const departementController = require('../controllers/departementControllers');

// GET all departements
router.get('/', departementController.getAllDepartements);

// GET a departement by ID
router.get('/:id_departement', departementController.getDepartementById);

// POST a new departement
router.post('/', departementController.createDepartement);

// PUT update a departement
router.put('/:id_departement', departementController.updateDepartement);

// DELETE a departement
router.delete('/:id_departement', departementController.deleteDepartement);

module.exports = router;