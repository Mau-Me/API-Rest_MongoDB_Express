import express from "express";

const app = express();

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

export default app;
