import { getById as getByIdService } from "./service.repository.js"

import BookingMongoDao from "../DAO/mongo/booking.mongo.dao.js"

const bookinMongoDao = new BookingMongoDao()

async function getAll() {

    return await bookinMongoDao.getAll()
}


async function getById(id) {

    return await bookinMongoDao.getById(id)


}


async function create(booking) {

    return await bookinMongoDao.create(booking)

}


async function update(id, data) {
return await bookinMongoDao.update(id,data)
}


// async function remove(id) {

//     const bookings = await readBookings()

//     const index = bookings.findIndex(
//         booking => booking.id === Number(id)
//     )

//     if (index === -1) {
//         return null
//     }

//     const deletedBooking = bookings.splice(index, 1)[0]

//     await writeBookings(bookings)

//     return deletedBooking
// }


export {
    getAll,
    getById,
    create,
    update
}
