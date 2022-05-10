import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";

db.on("error", console.log.bind(console, "Erro de Conexão"));
db.once("open", () => {
  console.log("Conexão com o BD realizada com sucesso!!!");
});

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Curso de Node");
});

app.get("/livros", (req, res) => {
  livros.find((err, livros) => {
    res.json(livros);
  });
});

app.get("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const indiceLivro = buscaIdLivro(id);

  res.json(livros[indiceLivro]);
});

app.post("/livros", (req, res) => {
  const livro = req.body;
  livros.push(livro);

  res.status(201).end();
});

app.put("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const novoLivro = req.body;

  const indiceLivro = buscaIdLivro(id);

  livros[indiceLivro].nome = novoLivro.nome;

  res.end();
});

app.delete("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const indiceLivro = buscaIdLivro(id);
  livros.splice(indiceLivro, 1);

  res.end();
});

function buscaIdLivro(id) {
  return livros.findIndex((livro) => livro.id == id);
}

export default app;
