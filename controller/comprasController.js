const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

require("../models/item");
const Compras = mongoose.model("compras");

router.get('/', (req, res) => {
    Compras.find().lean().then((compras) => {
        res.render("admin/compras", { compras: compras });
    });
});

router.get('/adicionar', (req, res) => {
    res.render("admin/add");
});

router.post('/nova', (req, res) => {
    var compras = new Compras();
    compras.nome = req.body.nome;
    compras.quantidade = req.body.quantidade;
    compras.descricao = req.body.descricao;
    compras.save().then(() => {
        res.redirect("/");
    }).catch((erro) => {
        res.send('Houve um erro: ' + erro);
    });
});

router.get('/editar/:id', (req, res) => {
    Compras.findOne({ _id: req.params.id }).lean().then((compras) => {
        res.render("admin/edit", { compra: compras });
    });
});

router.post('/editar', (req, res) => {
    Compras.updateOne({ _id: req.body._id },
        {
            $set: {
                nome: req.body.nome, quantidade: req.body.quantidade, descricao: req.body.descricao
            }
        }).then(() => {
            res.redirect("/");
        });
});

router.get('/deletar/:id', (req, res) => {
    Compras.deleteMany({ _id: req.params.id }).then(() => {
        res.redirect("/");
    });
});

module.exports = router;