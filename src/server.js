import dotenv from "dotenv"
import app from "./app.js"
import env from "./config/env.config.js"
import { conectDB } from "./config/database.config.js"

dotenv.config()

const port = env.PORT

app.listen(port, () => {
    console.log(`Server is running - http://localhost:${port}/`)
    conectDB()
})
