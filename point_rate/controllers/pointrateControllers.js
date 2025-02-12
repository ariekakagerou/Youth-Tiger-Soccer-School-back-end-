const PointRateService = require('../services/pointrateServices');

// GET all point rates
exports.getAllPointRates = async(_req, res) => {
    const pointRates = await PointRateService.getAllPointRates();
    res.json(pointRates);
};

// GET a point rate by ID
exports.getPointRateById = async(req, res) => {
    const pointRate = await PointRateService.getPointRateById(req.params.id_point_rate);
    if (pointRate) {
        res.json(pointRate);
    } else {
        res.sendStatus(404);
    }
};

// POST a new point rate
exports.createPointRate = async(req, res) => {
    const { point_rate, rate } = req.body;
    const newPointRate = await PointRateService.createPointRate(point_rate, rate);
    res.status(201).json(newPointRate);
};

// PUT update a point rate
exports.updatePointRate = async(req, res) => {
    const { point_rate, rate } = req.body;
    await PointRateService.updatePointRate(req.params.id_point_rate, point_rate, rate);
    res.sendStatus(204);
};

// DELETE a point rate
exports.deletePointRate = async(req, res) => {
    await PointRateService.deletePointRate(req.params.id_point_rate);
    res.sendStatus(204);
};