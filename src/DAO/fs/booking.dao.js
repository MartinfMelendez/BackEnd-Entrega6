import fs from 'fs/promises'
import raiz from '../../utils/path.js'

const PATH = raiz + '/data/bookings.json'


async function readBookings() {

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


async function writeBookings(bookings) {

    await fs.writeFile(
        PATH,
        JSON.stringify(bookings, null, 2),
        'utf-8'
    )
}


export {
    readBookings,
    writeBookings
}
