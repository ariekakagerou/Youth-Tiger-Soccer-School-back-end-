const AspectSubService = require('../services/aspectsubServices');

// GET all aspect subs
exports.getAllAspectSubs = async(_, res) => {
    const aspectSubs = await AspectSubService.getAllAspectSubs();
    res.json(aspectSubs);
};

// GET an aspect sub by ID
exports.getAspectSubById = async(req, res) => {
    const aspectSub = await AspectSubService.getAspectSubById(req.params.id_aspect_sub);
    if (aspectSub) {
        res.json(aspectSub);
    } else {
        res.sendStatus(404);
    }
};

// POST a new aspect sub
exports.createAspectSub = async(req, res) => {
    const { id_aspect, name_aspect_sub, ket_aspect_sub } = req.body;
    try {
        const newAspectSub = await AspectSubService.createAspectSub(id_aspect, name_aspect_sub, ket_aspect_sub);
        res.status(201).json(newAspectSub);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// PUT update an aspect sub
exports.updateAspectSub = async(req, res) => {
    const { id_aspect, name_aspect_sub, ket_aspect_sub } = req.body;
    try {
        await AspectSubService.updateAspectSub(req.params.id_aspect_sub, id_aspect, name_aspect_sub, ket_aspect_sub);
        res.json({ message: 'Aspect sub successfully updated' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// DELETE an aspect sub
exports.deleteAspectSub = async(req, res) => {
    try {
        await AspectSubService.deleteAspectSub(req.params.id_aspect_sub);
        res.json({ message: 'Aspect sub successfully deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};