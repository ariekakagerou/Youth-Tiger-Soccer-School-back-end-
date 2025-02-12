const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/sheduleControllers');

router.get('/', scheduleController.getAllSchedules);
router.get('/:id_schedule', scheduleController.getScheduleById);
router.post('/', scheduleController.createSchedule);
router.put('/:id_schedule', scheduleController.updateSchedule);
router.delete('/:id_schedule', scheduleController.deleteSchedule);

module.exports = router;