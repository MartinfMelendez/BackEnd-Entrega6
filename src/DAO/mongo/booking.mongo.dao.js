import mongoose from "mongoose";

import { BookingModel } from '../models/booking.model.js'


export default class BookingMongoDao {
    async getAll() {
        return BookingModel.find()
    }

    async getById(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return null
        }
        return BookingModel.findById(id)
    }

    async create(data) {
        return BookingModel.create(data)
    }

    async update(id, data) {
        return BookingModel.findOneAndUpdate({_id: id}, data, { new: true, runValidators: true })
    }
}