import mongoose from "mongoose";

const senhaSchema = new mongoose.Schema({
    numero: {type: Number},
    atendimento: {type: String},
    status: {type: String},
    chamadaInicida: { type: Date, default: null },
    chamadaFinalizada: { type: Date, default: null }
});

const senha = mongoose.model("Senhas", senhaSchema);

export default senha;