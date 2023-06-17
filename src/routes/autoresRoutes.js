import express from "express"
import AutorController from "../controllers/autores.Controller.js"


const router = express.Router();

router
    .get("/autores",AutorController.listarAutores)
    .get("/autores/:id",AutorController.buscaAutor)
    .post("/autores",AutorController.registraAutores)
    .put("/autores/:id",AutorController.atualizarAutor)
    .delete("/autores/:id",AutorController.excluirAutor)

export default router;

