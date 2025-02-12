const Coach = require('../models/coachs');
const db = require('../../config/db');

class CoachService {
    static async getAllCoaches() {
        return await Coach.getAll();
    }

    static async getCoachById(id) {
        return await Coach.getById(id);
    }

    static async createCoach(coachData) {
        return await Coach.create(coachData);
    }

    static async updateCoach(id_coach, coachData) {
        const { status_coach } = coachData;
        await Coach.update(id_coach, status_coach);
    }

    static async deleteCoach(id_coach) {
        await Coach.delete(id_coach);
    }

    static async getCoachByEmail(email) {
        const [rows] = await db.query('SELECT * FROM coach WHERE email = ?', [email]);
        return rows[0];
    }
}

module.exports = CoachService;