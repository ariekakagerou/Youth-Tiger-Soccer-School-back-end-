const Aspect = require('../models/aspects');

class AspectService {
    static async getAllAspects() {
        return await Aspect.getAll();
    }

    static async getAspectById(id_aspect) {
        return await Aspect.getById(id_aspect);
    }

    static async createAspect(name_aspect) {
        return await Aspect.create(name_aspect);
    }

    static async updateAspect(id_aspect, name_aspect) {
        await Aspect.update(id_aspect, name_aspect);
    }

    static async deleteAspect(id_aspect) {
        await Aspect.delete(id_aspect);
    }
}

module.exports = AspectService;