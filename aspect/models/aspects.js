const db = require('../../config/db');

class Aspect {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM aspect');
        return rows;
    }

    static async getById(id_aspect) {
        const [rows] = await db.query('SELECT * FROM aspect WHERE id_aspect = ?', [id_aspect]);
        return rows[0];
    }

    static async create(name_aspect) {
        const [result] = await db.query('INSERT INTO aspect (name_aspect) VALUES (?)', [name_aspect]);
        return { id: result.insertId, name_aspect };
    }

    static async update(id_aspect, name_aspect) {
        await db.query('UPDATE aspect SET name_aspect = ? WHERE id_aspect = ?', [name_aspect, id_aspect]);
    }

    static async delete(id_aspect) {
        await db.query('DELETE FROM aspect WHERE id_aspect = ?', [id_aspect]);
    }
}

module.exports = Aspect;