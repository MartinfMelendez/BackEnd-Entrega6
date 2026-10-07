
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


async function update(id,data){
    return await serviceMongoDao.update(id,data)
}

async function remove(id) {
    return serviceMongoDao.delete(id)
}

export {
    getAll,
    getById,
    create,
    update,
    remove
}
