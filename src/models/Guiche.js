import mongoose from "mongoose";

const guicheSchema = new mongoose.Schema({
    numero: {type: Number},
    atendente: {type: String},
    senha_id: { type: mongoose.Schema.Types.ObjectId, ref: ""}
});

const guiche = mongoose.model("Guiches", guicheSchema);

export default guiche;