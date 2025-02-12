const db = require('../../config/db');

class Management {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM management');
        return rows;
    }

    static async getById(id_management) {
        const [rows] = await db.query('SELECT * FROM management WHERE id_management = ?', [id_management]);
        return rows[0];
    }

    static async create(name, gender, date_birth, email, nohp, id_departement, status = 1) {
        const [result] = await db.query(
            'INSERT INTO management (name, gender, date_birth, email, nohp, id_departement, status) VALUES (?, ?, ?, ?, ?, ?, ?)', [name, gender, date_birth, email, nohp, id_departement, status]
        );
        return { id_management: result.insertId, name, gender, date_birth, email, nohp, id_departement, status };
    }

    static async update(id_management, name, gender, date_birth, email, nohp, id_departement, status) {
        await db.query('UPDATE management SET name = ?, gender = ?, date_birth = ?, email = ?, nohp = ?, id_departement = ?, status = ? WHERE id_management = ?', [name, gender, date_birth, email, nohp, id_departement, status, id_management]);
    }

    static async delete(id_management) {
        await db.query('DELETE FROM management WHERE id_management = ?', [id_management]);
    }
    static async updateManagement(id_management, status) {
        await db.query('UPDATE management SET status = ? WHERE id_management = ?', [status, id_management]);
    }

}

module.exports = Management;