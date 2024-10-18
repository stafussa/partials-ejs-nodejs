var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var enableHotReload = require("./hot-reload");

const app = express();

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// Configurações do seu app Express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

console.log("Views path set to:", path.join(__dirname, "views"));

// Configuração de pasta pública
app.use(express.static(path.join(__dirname, "public")));

// Habilitar hot-reload
enableHotReload(app);

// Rotas
app.get("/", (req, res) => {
  res.render("pagina1");
});

app.get("/pagina2", (req, res) => {
  res.render("pagina2");
});

app.get("/pagina3", (req, res) => {
  res.render("pagina3");
});

app.get("/pagina4", (req, res) => {
  res.render("pagina4");
});

app.get("/pagina5", (req, res) => {
  res.render("pagina5");
});

app.get("/pagina6", (req, res) => {
  res.render("pagina6");
});

// Inicie o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
