const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
//db.ornelles.local//server="mongodb://db.ornelles.local/compras"
const url = process.env.server || "mongodb://db.ornelles.local/compras";
mongoose.connect(url).then(() => {
    console.log("MongoDB Conectado..");
}).catch((err) => {
    console.log("Erro ao conectar: " + err);
});
