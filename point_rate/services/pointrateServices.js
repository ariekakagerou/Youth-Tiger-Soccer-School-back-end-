const PointRate = require('../models/pointrates');

class PointRateService {
    static async getAllPointRates() {
        return await PointRate.getAll();
    }

    static async getPointRateById(id_point_rate) {
        return await PointRate.getById(id_point_rate);
    }

    static async createPointRate(point_rate, rate) {
        return await PointRate.create(point_rate, rate);
    }

    static async updatePointRate(id_point_rate, point_rate, rate) {
        await PointRate.update(id_point_rate, point_rate, rate);
    }

    static async deletePointRate(id_point_rate) {
        await PointRate.delete(id_point_rate);
    }
}

module.exports = PointRateService;