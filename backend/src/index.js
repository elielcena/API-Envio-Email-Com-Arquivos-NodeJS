// importando lib express
const express = require("express");

// importando lib cors
const cors = require("cors");

// importando arquivo de rotas
const routes = require("./routes");

// montando um servidor básico com express
const app = express();

// constante com a porta para start do servidor
const PORT = 8181;

// habilitando cors para o browser conseguir acessar as rotas
// habilitando todos metodos HTTP
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "x-www-form-urlencoded, Origin, X-Requested-With, Content-Type, Accept, Authorization, *"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.setHeader("Access-Control-Allow-Credentials", true);
  app.use(cors());
  next();
});

// setando o servidor indentificar o uso de json nas rotas
app.use(express.json());

// setando rotas na API
app.use(routes);

// start do servidor com a porta setada
app.listen(PORT, () => {
  console.log("SERVIDOR INICIADO | PORTA: " + PORT);
});
