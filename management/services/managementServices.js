const db = require('../../config/db');
const Management = require('../models/managements');

class ManagementService {
    static async getAllManagements() {
        return await Management.getAll();
    }

    static async getManagementById(id_management) {
        return await Management.getById(id_management);
    }

    static async createManagement(name, gender, date_birth, email, nohp, id_departement, status) {
        return await Management.create(name, gender, date_birth, email, nohp, id_departement, status);
    }

    static async update(id_management, managementData) {
        const { name, gender, date_birth, email, nohp, id_departement, status } = managementData;
        await Management.update(id_management, name, gender, date_birth, email, nohp, id_departement, status);
    }

    static async deleteManagement(id_management) {
        await Management.delete(id_management);
    }

    static async getManagementByEmail(email) {
        const [management] = await db.query('SELECT * FROM management WHERE email = ?', [email]);
        return management[0];
    }
    static async updateManagement(id_management, managementData) {
        const { status } = managementData;
        await Management.updateManagement(id_management, status);
    }
}

module.exports = ManagementService;