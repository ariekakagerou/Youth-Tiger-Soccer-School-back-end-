const db = require('../../config/db');

class Coach {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM coach');
        return rows;
    }

    static async getById(id) {
        const [rows] = await db.query('SELECT * FROM coach WHERE id_coach = ?', [id]);
        return rows[0];
    }

    static async create({ name_coach, coach_department, years_coach, email, nohp, status_coach = 1 }) {
        const [result] = await db.query(
            'INSERT INTO coach (name_coach, coach_department, years_coach, email, nohp, status_coach) VALUES (?, ?, ?, ?, ?, ?)', [name_coach, coach_department, years_coach, email, nohp, status_coach]
        );
        return { id_coach: result.insertId, name_coach, coach_department, years_coach, email, nohp, status_coach };
    }

    static async update(id_coach, status_coach) {
        await db.query('UPDATE coach SET status_coach = ? WHERE id_coach = ?', [status_coach, id_coach]);
    }

    static async delete(id_coach) {
        await db.query('DELETE FROM coach WHERE id_coach = ?', [id_coach]);
    }
}

module.exports = Coach;