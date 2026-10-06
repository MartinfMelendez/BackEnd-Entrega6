import mongoose from "mongoose";
import env from "./env.config.js";

export const conectDB = async ()=>{
    try {
        await mongoose.connect(env.MONGO_URI)
        console.log('Conexión a MongoDB establecida correctamente');
    } catch (error) {
        console.error("No se pudo conectar a MongoDB: ", error.message)
    }
}