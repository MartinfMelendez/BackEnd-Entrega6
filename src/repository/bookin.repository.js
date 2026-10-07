// import {
//     readBookings,
//     writeBookings
// } from '../dao/fs/booking.dao.js'

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


// async function update(id, data) {

//     const bookings = await readBookings()

//     const index = bookings.findIndex(
//         booking => booking.id === Number(id)
//     )

//     if (index === -1) {
//         return null
//     }

//     const updatedBooking = {
//         ...bookings[index],
//         ...data,
//         id: bookings[index].id
//     }

//     bookings[index] = updatedBooking

//     await writeBookings(bookings)

//     return updatedBooking
// }


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


// async function addService(id, serviceId) {

//     const bookings = await readBookings()

//     const booking = bookings.find(
//         booking => booking.id === Number(id)
//     )

//     if (!booking) {
//         return null
//     }

//     const bookingService = booking.services.find(
//         service => service.service === Number(serviceId)
//     )

//     if (!bookingService) {

//         booking.services.push({
//             service: Number(serviceId),
//             quantity: 1
//         })

//     } else {

//         bookingService.quantity += 1
//     }

//     await writeBookings(bookings)

//     return booking
// }


export {
    getAll,
    getById,
    create
}
