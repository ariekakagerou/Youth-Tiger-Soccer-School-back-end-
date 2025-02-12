const express = require('express');
const router = express.Router();
const aspectController = require('../controllers/aspectControllers');

// GET all aspects
router.get('/', aspectController.getAllAspects);

// GET an aspect by ID
router.get('/:id_aspect', aspectController.getAspectById);

// POST a new aspect
router.post('/', aspectController.createAspect);

// PUT update an aspect
router.put('/:id_aspect', aspectController.updateAspect);

// DELETE an aspect
router.delete('/:id_aspect', aspectController.deleteAspect);

module.exports = router;