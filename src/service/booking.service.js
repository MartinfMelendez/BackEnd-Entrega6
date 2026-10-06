import {
    getAll,
    getById,
    create,
    update,
    remove,
    addService
} from '../repository/bookin.repository.js'

import { getAllServices } from './ServiceManager.js'


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

    const bookings = await getAll()

    const existingBooking = bookings.find(
        booking =>
            booking.clientEmail === clientEmail &&
            booking.date === date &&
            booking.time === time
    )

    if (existingBooking) {
        throw new Error('La reserva que intenta ingresar ya existe')
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


async function addServiceToReservation(
    bookingId,
    serviceId
) {

    const services = await getAllServices()

    const service = services.find(
        service => service.id === Number(serviceId)
    )

    if (!service) {
        throw new Error('El servicio ingresado no existe')
    }

    const booking = await getById(bookingId)

    if (!booking) {
        throw new Error('La reserva no existe')
    }

    return await addService(
        bookingId,
        serviceId
    )
}


async function updateBooking(id, data) {

    const booking = await getById(id)

    if (!booking) {
        throw new Error('Reserva no encontrada')
    }

    const { id: ignoredId, ...rest } = data

    return await update(id, rest)
}


async function deleteBooking(id) {

    const booking = await remove(id)

    if (!booking) {
        throw new Error('Reserva no encontrada')
    }

    return {
        message: 'Reserva eliminada correctamente'
    }
}


export {
    getAllBookings,
    getBookingById,
    addBooking,
    addServiceToReservation,
    updateBooking,
    deleteBooking
}
