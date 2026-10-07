import {
    getAll,
    getById,
    create
} from '../repository/service.repository.js'


async function getAllServices() {

    return await getAll()
}


async function getServiceById(id) {

    const service = await getById(id)

    if (!service) {
        throw new Error('Servicio no encontrado')
    }

    return service
}


async function addService(
    name,
    description,
    duration,
    price,
    category,
    available
) {

    if (
        !name ||
        !description ||
        !duration ||
        !price ||
        !category ||
        available === undefined
    ) {
        throw new Error('Todos los campos son obligatorios')
    }

    if (isNaN(price) || Number(price) <= 0) {
        throw new Error('El precio debe ser un número positivo')
    }

    return await create({
        name,
        description,
        duration,
        price,
        category,
        available
    })
}


// async function updateService(id, data) {

//     const service = await getById(id)

//     if (!service) {
//         throw new Error('Servicio no encontrado')
//     }

//     const { id: ignoredId, ...rest } = data

//     return await update(id, rest)
// }


// async function deleteService(id) {

//     const service = await remove(id)

//     if (!service) {
//         throw new Error('Servicio no encontrado')
//     }

//     return service
// }


export {
    getAllServices,
    getServiceById,
    addService
}



