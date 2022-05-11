import livros from "../src/models/Livro.js";

class LivroController {
  static listarLivros(req, res) {
    livros.find((err, livros) => {
      res.json(livros);
    });
  }

  static listarLivrosPorId(req, res) {
    const id = req.params.id;
    livros.findById(id, (err, result) => {
      if (err) {
        res
          .status(406)
          .send({ message: `Segue erro ao buscar o livro: ${err.message}` });
      }

      res.json(result);
    });
  }

  static cadastrarLivro(req, res) {
    const livro = new livros(req.body);
    livro.save((err) => {
      if (err) {
        res
          .status(400)
          .send({ message: `Segue erro ao cadastrar livro: ${err.message}` });
      }

      res.status(201).json(livro);
    });
  }

  static atualizarLivro(req, res) {
    const id = req.params.id;
    livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `Segue erro ao atualizar livro: ${err.message}` });
      }

      res.status(204).end();
    });
  }

  static apagarLivro(req, res) {
    const id = req.params.id;
    livros.findByIdAndDelete(id, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `Segue erro ao apagar livro: ${err.message}` });
      }

      res.status(204).end();
    });
  }
}

export default LivroController;
