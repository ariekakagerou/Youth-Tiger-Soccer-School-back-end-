const db = require('../../config/db');

class Schedule {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM schedule');
        return rows;
    }

    static async getById(id_schedule) {
        const [rows] = await db.query('SELECT * FROM schedule WHERE id_schedule = ?', [id_schedule]);
        return rows[0];
    }

    static async create(scheduleData) {
        const [result] = await db.query('INSERT INTO schedule (name_schedule, date_schedule, status_schedule) VALUES (?, ?, ?)', [scheduleData.name_schedule, scheduleData.date_schedule, scheduleData.status_schedule]);
        return { id: result.insertId, ...scheduleData };
    }

    static async update(id_schedule, scheduleData) {
        await db.query('UPDATE schedule SET name_schedule = ?, date_schedule = ?, status_schedule = ? WHERE id_schedule = ?', [scheduleData.name_schedule, scheduleData.date_schedule, scheduleData.status_schedule, id_schedule]);
    }

    static async delete(id_schedule) {
        await db.query('DELETE FROM schedule WHERE id_schedule = ?', [id_schedule]);
    }
}

module.exports = Schedule;