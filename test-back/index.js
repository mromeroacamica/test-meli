var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var controlador = require("./controller/api.controller");
const config = require("./config");

var app = express();

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(bodyParser.json());

app.get("/api/items", (req, res) => controlador.search(req, res));
app.get("/api/items/:id", (req, res) => controlador.items(req, res));

//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
var puerto = config.port;

app.listen(puerto, function () {
  console.log("Escuchando en el puerto " + puerto);
});
