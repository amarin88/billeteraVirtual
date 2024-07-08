import mongoose from "mongoose";

export const connectDB = async () =>{
    try {
        await mongoose.connect("mongodb+srv://admin:admin123456@codercluster0.0at1r6e.mongodb.net/coder-bank");
        console.log("Mongo conectado")

    } catch (error) {
        console.log("Error al conectar a la base de datos")
    }
};