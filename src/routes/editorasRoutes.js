import express from "express"
import EditoraController from "../controllers/editoras.Controller.js"


const router = express.Router();

router
    .get("/editoras",EditoraController.listarEditoras)
    .get("/editoras/:id",EditoraController.buscaEditora)
    .post("/editoras",EditoraController.registraEditoras)
    .put("/editoras/:id",EditoraController.atualizarEditora)
    .delete("/editoras/:id",EditoraController.excluirEditora)

export default router;

