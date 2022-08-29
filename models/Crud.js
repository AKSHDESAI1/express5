import mongoose from "mongoose";

// Define Schema
const crudScema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    desc: { type: String, required: true, trim: true },
}, { timestamps: true })

//Compile Schema to Model
const Crud = mongoose.model("crud", crudScema);

export default Crud;