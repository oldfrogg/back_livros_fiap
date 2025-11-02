import { Router } from "express";
import LivroController from "../controllers/livroController.js"

const router = Router();

// Listar todos os livros
router.get("/listar_livros", (req, res) =>  LivroController.listarLivros(req, res));

// Buscar Livro por ID
router.get("/buscar_livro/:id", (req, res) => LivroController.buscarLivro(req, res));

// Criar novo Livro
router.post("/criar_livro", (req, res) => LivroController.criarLivro(req, res));

// Atualizar Livro existente
router.put("/editar_livro/:id", (req, res) => LivroController.editarLivro(req, res));

// Deletar Livro existente
router.delete("/deletar_livro/:id", (req, res) => LivroController.deletarLivro(req, res));



export default router;