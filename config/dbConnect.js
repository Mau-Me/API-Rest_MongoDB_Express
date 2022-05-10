import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://maume:1374213742@cluster0.igj44.mongodb.net/Alura_Cursos"
);

const db = mongoose.connection;

export default db;
