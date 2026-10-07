import {
    getAll,
    getById,
    create,
    update
    } from '../repository/bookin.repository.js'

import { getServiceById } from './services.service.js'


async function getAllBookings() {
    return await getAll()
}

async function getBookingById(id) {

    const booking = await getById(id)

    if (!booking) {
        throw new Error('Reserva no encontrada')
    }

    return booking
}


async function addBooking(
    clientName,
    clientEmail,
    date,
    time,
    status,
    services = []
) {

    if (
        !clientName ||
        !clientEmail ||
        !date ||
        !time ||
        !status
    ) {
        throw new Error('Todos los campos son obligatorios')
    }


    return await create({
        clientName,
        clientEmail,
        date,
        time,
        status,
        services
    })
}


async function addServiceToReservation(bookingId, serviceId) {
    const service = await getServiceById(serviceId)

    if (!service) {
        throw new Error("El servicio seleccionado no existe")
    }

    const booking = await getById(bookingId)

    if (!booking) {
        throw new Error("La reserva que intenta ingresar no existe")
    }

    const item = booking.services.find(
        (s) => String(s.services) === String(serviceId)
    )

    if (item) {
        item.quantity += 1
    } else {
        booking.services.push({
            services: serviceId,
            quantity: 1
        })
    }

    const services = booking.services.map((s) => ({
        services: s.services?._id ?? s.services,
        quantity: s.quantity
    }))

    await update(bookingId, { services })

    return getById(bookingId)
}



// async function updateBooking(id, data) {

//     const booking = await getById(id)

//     if (!booking) {
//         throw new Error('Reserva no encontrada')
//     }

//     const { id: ignoredId, ...rest } = data

//     return await update(id, rest)
// }


// async function deleteBooking(id) {

//     const booking = await remove(id)

//     if (!booking) {
//         throw new Error('Reserva no encontrada')
//     }

//     return {
//         message: 'Reserva eliminada correctamente'
//     }
// }


export {
    getAllBookings,
    getBookingById,
    addBooking,
    addServiceToReservation
}
