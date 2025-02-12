const express = require('express');
const router = express.Router();
const pointrateController = require('../controllers/pointrateControllers');

// GET all point rates
router.get('/', pointrateController.getAllPointRates);

// GET a point rate by ID
router.get('/:id_point_rate', pointrateController.getPointRateById);

// POST a new point rate
router.post('/', pointrateController.createPointRate);

// PUT update a point rate
router.put('/:id_point_rate', pointrateController.updatePointRate);

// DELETE a point rate
router.delete('/:id_point_rate', pointrateController.deletePointRate);

module.exports = router;