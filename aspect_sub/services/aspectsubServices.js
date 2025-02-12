const AspectSub = require('../models/aspectsubs');

class AspectSubService {
    static async getAllAspectSubs() {
        return await AspectSub.getAll();
    }

    static async getAspectSubById(id_aspect_sub) {
        return await AspectSub.getById(id_aspect_sub);
    }

    static async createAspectSub(id_aspect, name_aspect_sub, ket_aspect_sub) {
        return await AspectSub.create(id_aspect, name_aspect_sub, ket_aspect_sub);
    }

    static async updateAspectSub(id_aspect_sub, id_aspect, name_aspect_sub, ket_aspect_sub) {
        await AspectSub.update(id_aspect_sub, id_aspect, name_aspect_sub, ket_aspect_sub);
    }

    static async deleteAspectSub(id_aspect_sub) {
        await AspectSub.delete(id_aspect_sub);
    }
}

module.exports = AspectSubService;