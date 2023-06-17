import express from "express"
import LivroController from "../controllers/livrosController.js"


const router = express.Router();

router
    .get("/livros",LivroController.listarLivros)
    .get("/livros/busca",LivroController.buscaLivroPorEditora)
    .get("/livros/:id",LivroController.buscaLivro)
    .post("/livros",LivroController.registraLivros)
    .put("/livros/:id",LivroController.atualizarLivro)
    .delete("/livros/:id",LivroController.excluirLivro)

export default router;

