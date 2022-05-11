import autores from "../models/Autor.js";

class AutorController {
  static listarAutores(req, res) {
    autores.find((err, autores) => {
      res.json(autores);
    });
  }

  static listarAutoresPorId(req, res) {
    const id = req.params.id;
    autores.findById(id, (err, result) => {
      if (err) {
        res
          .status(406)
          .send({ message: `Segue erro ao buscar o autor: ${err.message}` });
      }

      res.json(result);
    });
  }

  static cadastrarAutor(req, res) {
    const autor = new autores(req.body);
    autor.save((err) => {
      if (err) {
        res
          .status(400)
          .send({ message: `Segue erro ao cadastrar autor: ${err.message}` });
      }

      res.status(201).json(autor);
    });
  }

  static atualizarAutor(req, res) {
    const id = req.params.id;
    autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `Segue erro ao atualizar autor: ${err.message}` });
      }

      res.status(204).end();
    });
  }

  static apagarAutor(req, res) {
    const id = req.params.id;
    autores.findByIdAndDelete(id, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `Segue erro ao apagar autor: ${err.message}` });
      }

      res.status(204).end();
    });
  }
}

export default AutorController;
