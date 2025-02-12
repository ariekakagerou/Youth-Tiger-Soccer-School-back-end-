const db = require('../../config/db');

class PointRate {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM point_rate');
        return rows;
    }

    static async getById(id_point_rate) {
        const [rows] = await db.query('SELECT * FROM point_rate WHERE id_point_rate = ?', [id_point_rate]);
        return rows[0];
    }

    static async create(point_rate, rate) {
        const [result] = await db.query('INSERT INTO point_rate (point_rate, rate) VALUES (?, ?)', [point_rate, rate]);
        return { id: result.insertId, point_rate, rate };
    }

    static async update(id_point_rate, point_rate, rate) {
        await db.query('UPDATE point_rate SET point_rate = ?, rate = ? WHERE id_point_rate = ?', [point_rate, rate, id_point_rate]);
    }

    static async delete(id_point_rate) {
        await db.query('DELETE FROM point_rate WHERE id_point_rate = ?', [id_point_rate]);
    }
}

module.exports = PointRate;