const db = require('../../config/db');

class AspectSub {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM aspect_sub');
        return rows;
    }

    static async getById(id_aspect_sub) {
        const [rows] = await db.query('SELECT * FROM aspect_sub WHERE id_aspect_sub = ?', [id_aspect_sub]);
        return rows[0];
    }

    static async create(id_aspect, name_aspect_sub, ket_aspect_sub) {
        const [result] = await db.query('INSERT INTO aspect_sub (id_aspect, name_aspect_sub, ket_aspect_sub) VALUES (?, ?, ?)', [id_aspect, name_aspect_sub, ket_aspect_sub]);
        return { id: result.insertId, id_aspect, name_aspect_sub, ket_aspect_sub };
    }

    static async update(id_aspect_sub, id_aspect, name_aspect_sub, ket_aspect_sub) {
        await db.query('UPDATE aspect_sub SET id_aspect = ?, name_aspect_sub = ?, ket_aspect_sub = ? WHERE id_aspect_sub = ?', [id_aspect, name_aspect_sub, ket_aspect_sub, id_aspect_sub]);
    }

    static async delete(id_aspect_sub) {
        await db.query('DELETE FROM aspect_sub WHERE id_aspect_sub = ?', [id_aspect_sub]);
    }
}

module.exports = AspectSub;