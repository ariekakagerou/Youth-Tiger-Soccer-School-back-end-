const Schedule = require('../models/shedules');

const scheduleServices = {
    getAllSchedules: async() => {
        return await Schedule.getAll();
    },
    getScheduleById: async(id_schedule) => {
        return await Schedule.getById(id_schedule);
    },
    createSchedule: async(scheduleData) => {
        return await Schedule.create(scheduleData);
    },
    updateSchedule: async(id_schedule, scheduleData) => {
        return await Schedule.update(id_schedule, scheduleData);
    },
    deleteSchedule: async(id_schedule) => {
        return await Schedule.delete(id_schedule);
    }
};

module.exports = scheduleServices;