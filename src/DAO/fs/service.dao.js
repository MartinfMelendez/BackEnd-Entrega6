import fs from 'fs/promises'
import raiz from '../../utils/path.js'

const PATH = raiz + '/data/services.json'


async function readServices() {

    try {

        const fileContent = await fs.readFile(PATH, 'utf-8')

        return JSON.parse(fileContent)

    } catch (error) {

        if (error.code === 'ENOENT') {

            await fs.writeFile(PATH, '[]')

            return []
        }

        throw error
    }
}


async function writeServices(services) {

    await fs.writeFile(
        PATH,
        JSON.stringify(services, null, 2),
        'utf-8'
    )
}

export {
    readServices,
    writeServices
}
