const db = require('../../config/db');

class Information {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM information');
        return rows;
    }

    static async getById(id_information) {
        const [rows] = await db.query('SELECT * FROM information WHERE id_information = ?', [id_information]);
        return rows[0];
    }

    static async create(data) {
        const [result] = await db.query('INSERT INTO information (name_info, info, date_info, status_info) VALUES (?, ?, ?, ?)', [data.name_info, data.info, data.date_info, data.status_info]);
        return { id: result.insertId, ...data };
    }

    static async update(id_information, data) {
        await db.query('UPDATE information SET name_info = ?, info = ?, date_info = ?, status_info = ? WHERE id_information = ?', [data.name_info, data.info, data.date_info, data.status_info, id_information]);
    }

    static async delete(id_information) {
        await db.query('DELETE FROM information WHERE id_information = ?', [id_information]);
    }
}

module.exports = Information;