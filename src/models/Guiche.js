import mongoose from "mongoose";

const guicheSchema = new mongoose.Schema({
    id: {type: Number},
    numero: {type: Number},
    atendente: {type: String},
    
});