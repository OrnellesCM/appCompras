require('./db');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Compras = new Schema({
    nome: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
});
mongoose.model("compras", Compras);