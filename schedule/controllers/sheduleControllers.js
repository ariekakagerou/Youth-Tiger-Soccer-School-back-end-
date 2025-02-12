const scheduleService = require('../services/sheduleServices');

// GET all schedules
exports.getAllSchedules = async(_req, res) => {
    try {
        const schedules = await scheduleService.getAllSchedules();
        res.json(schedules);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// GET schedule by ID
exports.getScheduleById = async(req, res) => {
    try {
        const schedule = await scheduleService.getScheduleById(req.params.id_schedule);
        if (!schedule) {
            return res.status(404).json({ error: 'Schedule not found' });
        }
        res.json(schedule);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// POST new schedule
exports.createSchedule = async(req, res) => {
    try {
        const newSchedule = await scheduleService.createSchedule(req.body);
        res.status(201).json(newSchedule);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// PUT update schedule
exports.updateSchedule = async(req, res) => {
    try {
        await scheduleService.updateSchedule(req.params.id, req.body);
        res.json({ message: 'Schedule updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// DELETE schedule
exports.deleteSchedule = async(req, res) => {
    try {
        await scheduleService.deleteSchedule(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};