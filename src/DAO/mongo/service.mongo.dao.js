//Se debe crear el CRUD utilizando mongoose

import mongoose from 'mongoose'

import { ServiceModel } from '../models/service.model.js'

export default class ServiceMongoDao {
    async getAll() {
        return ServiceModel.find()
    }

    async getById(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return null
        }
        return ServiceModel.findById(id)
    }

    async create(data) {
        return ServiceModel.create(data)
    }

    async update(id, data) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return null;
        }

        return ServiceModel.findByIdAndUpdate(id, data, { returnDocument: 'after' });
    }

    async delete(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return null;
        }

        return ServiceModel.findByIdAndDelete(id, { delete: true }, { new: true });
    }
}
