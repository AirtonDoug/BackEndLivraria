import mongoose from "mongoose";

mongoose.connect("mongodb+srv://airtonservodecristo:248625@aluralivraria.hezmp5j.mongodb.net/alura");

let db = mongoose.connection;

export default db;