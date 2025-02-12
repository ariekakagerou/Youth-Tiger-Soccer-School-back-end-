const db = require('../../config/db');

class Assessment {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM assessment');
        return rows;
    }

    static async getById(id_assessment) {
        const [rows] = await db.query('SELECT * FROM assessment WHERE id_assessment = ?', [id_assessment]);
        return rows[0];
    }

    static async create(data) {
        const [result] = await db.query('INSERT INTO assessment (year_academic, year_assessment, reg_id_student, id_aspect_sub, id_coach, point, ket, date_assessment) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [data.year_academic, data.year_assessment, data.reg_id_student, data.id_aspect_sub, data.id_coach, data.point, data.ket, data.date_assessment]);
        return { id: result.insertId, ...data };
    }

    static async update(id_assessment, data) {
        await db.query('UPDATE assessment SET year_academic = ?, year_assessment = ?, reg_id_student = ?, id_aspect_sub = ?, id_coach = ?, point = ?, ket = ?, date_assessment = ? WHERE id_assessment = ?', [data.year_academic, data.year_assessment, data.reg_id_student, data.id_aspect_sub, data.id_coach, data.point, data.ket, data.date_assessment, id_assessment]);
    }

    static async delete(id_assessment) {
        await db.query('DELETE FROM assessment WHERE id_assessment = ?', [id_assessment]);
    }
}

module.exports = Assessment;