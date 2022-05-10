import express from "express";

const app = express();

app.use(express.json());

const livros = [
  {
    id: 1,
    nome: "senhor dos aneis",
  },
  {
    id: 2,
    nome: "o mundo de sófia",
  },
];

app.get("/", (req, res) => {
  res.send("Curso de Node");
});

app.get("/livros", (req, res) => {
  res.json(livros);
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
