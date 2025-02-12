const Departement = require('../models/departements');

class DepartementService {
    static async getAllDepartements() {
        return await Departement.getAll();
    }

    static async getDepartementById(id_departement) {
        return await Departement.getById(id_departement);
    }

    static async createDepartement(name_departement, status) {
        return await Departement.create(name_departement, status);
    }

    static async updateDepartement(id_departement, name_departement, status) {
        await Departement.update(id_departement, name_departement, status);
    }

    static async deleteDepartement(id_departement) {
        await Departement.delete(id_departement);
    }
}

module.exports = DepartementService;