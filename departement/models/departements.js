const db = require('../../config/db');

class Departement {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM departement');
        return rows;
    }

    static async getById(id_departement) {
        const [rows] = await db.query('SELECT * FROM departement WHERE id_departement = ?', [id_departement]);
        return rows[0];
    }

    static async create(name_departement, status) {
        const [result] = await db.query('INSERT INTO departement (name_departement, status) VALUES (?, ?)', [name_departement, status]);
        return { id: result.insertId, name_departement, status };
    }

    static async update(id_departement, name_departement, status) {
        await db.query('UPDATE departement SET name_departement = ?, status = ? WHERE id_departement = ?', [name_departement, status, id_departement]);
    }

    static async delete(id_departement) {
        await db.query('DELETE FROM departement WHERE id_departement = ?', [id_departement]);
    }
}

module.exports = Departement;