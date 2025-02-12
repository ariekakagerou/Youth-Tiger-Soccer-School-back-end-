const express = require('express');
const router = express.Router();
const aspectSubController = require('../controllers/aspectsubControllers');

// GET all aspect subs
router.get('/', aspectSubController.getAllAspectSubs);

// GET an aspect sub by ID
router.get('/:id_aspect_sub', aspectSubController.getAspectSubById);

// POST a new aspect sub
router.post('/', aspectSubController.createAspectSub);

// PUT update an aspect sub
router.put('/:id_aspect_sub', aspectSubController.updateAspectSub);

// DELETE an aspect sub
router.delete('/:id_aspect_sub', aspectSubController.deleteAspectSub);

module.exports = router;