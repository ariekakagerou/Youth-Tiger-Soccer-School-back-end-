const db = require('../../config/db');

class AssessmentSetting {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM assessment_setting');
        return rows;
    }

    static async getById(id_assessment_setting) {
        const [rows] = await db.query('SELECT * FROM assessment_setting WHERE id_assessment_setting = ?', [id_assessment_setting]);
        return rows[0];
    }

    static async create(data) {
        const [result] = await db.query('INSERT INTO assessment_setting (year_academic, year_assessment, id_coach, id_aspect_sub, bobot) VALUES (?, ?, ?, ?, ?)', [data.year_academic, data.year_assessment, data.id_coach, data.id_aspect_sub, data.bobot]);
        return { id: result.insertId, ...data };
    }

    static async update(id_assessment_setting, data) {
        await db.query('UPDATE assessment_setting SET year_academic = ?, year_assessment = ?, id_coach = ?, id_aspect_sub = ?, bobot = ? WHERE id_assessment_setting = ?', [data.year_academic, data.year_assessment, data.id_coach, data.id_aspect_sub, data.bobot, id_assessment_setting]);
    }

    static async delete(id_assessment_setting) {
        await db.query('DELETE FROM assessment_setting WHERE id_assessment_setting = ?', [id_assessment_setting]);
    }
}

module.exports = AssessmentSetting;