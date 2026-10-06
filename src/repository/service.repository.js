//Utilizamos el DAO 

import { readServices,writeServices } from "../DAO/fs/service.dao.js"

import ServiceMongoDao from '../DAO/mongo/service.mongo.dao.js'

const serviceMongoDao = new ServiceMongoDao()

async function getAll() {

    return await serviceMongoDao.getAll()
}


async function getById(id) {

    return await serviceMongoDao.getById(id)

}

async function create(data){
return serviceMongoDao.create(data)
}


// async function update(id, data) {

//     const services = await readServices()

//     const index = services.findIndex(
//         service => service.id === Number(id)
//     )

//     if (index === -1) {
//         return null
//     }

//     const updatedService = {
//         ...services[index],
//         ...data,
//         id: services[index].id
//     }

//     services[index] = updatedService

//     await writeServices(services)

//     return updatedService
// }


// async function remove(id) {

//     const services = await readServices()

//     const index = services.findIndex(
//         service => service.id === Number(id)
//     )

//     if (index === -1) {
//         return null
//     }

//     const deletedService = services.splice(index, 1)[0]

//     await writeServices(services)

//     return deletedService
// }


export {
    getAll,
    getById,
    create
}
