// importando lib express
const express = require("express");

// importando lib multer
const multer = require("multer");

// importando arquivo de configuração de multer
const multerConfig = require("./config/multer");

// importando arquivo de controllers
const SendEmailController = require("./controllers/SendEmailController");

// importando e setando na viavel as rotas do express
const routes = express.Router();

// rota GET "/test" para testar a API
routes.get("/teste", (req, res) => {
  console.log("TESTE API");
  res.send("Teste API");
});

// rota GET "/sendEmail" para envio de email com arquivos
routes.post(
  "/sendEmail",
  multer(multerConfig).single("file"),
  SendEmailController.index
);

module.exports = routes;
