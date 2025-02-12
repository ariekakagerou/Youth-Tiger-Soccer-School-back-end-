const AspectService = require('../services/aspectServices');

// GET all aspects
exports.getAllAspects = async(_req, res) => {
    const aspects = await AspectService.getAllAspects();
    res.json(aspects);
};

// GET an aspect by ID
exports.getAspectById = async(req, res) => {
    const aspect = await AspectService.getAspectById(req.params.id_aspect);
    if (aspect) {
        res.json(aspect);
    } else {
        res.sendStatus(404);
    }
};

// POST a new aspect
exports.createAspect = async(req, res) => {
    const { name_aspect } = req.body;
    try {
        const newAspect = await AspectService.createAspect(name_aspect);
        res.status(201).json(newAspect);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// PUT update an aspect
exports.updateAspect = async(req, res) => {
    const { name_aspect } = req.body;
    try {
        await AspectService.updateAspect(req.params.id_aspect, name_aspect);
        res.json({ message: 'Aspect successfully updated' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// DELETE an aspect
exports.deleteAspect = async(req, res) => {
    try {
        await AspectService.deleteAspect(req.params.id_aspect);
        res.json({ message: 'Aspect successfully deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};