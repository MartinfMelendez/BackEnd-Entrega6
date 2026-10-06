//Se debe crear el CRUD utilizando mongoose

import mongoose from 'mongoose'

import { ServiceModel } from '../models/service.model'

export class ServiceMongoDao {
    async getAll() {
        return ServiceModel.find()
    }

    async getById(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return null
        }
        return ServiceModel.findById(id)
    }
}