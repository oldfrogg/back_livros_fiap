import LivroService from "../services/livroService.js";

class LivroController {
    async listarLivros(req, res) {
        try {
            const livros = await LivroService.listarLivros();
            res.status(200).json(livros);
        } catch (erro) {
            console.error(erro);
            res.status(500).json({
                error: "Erro ao listar livros"
            });
        };
    };

    async buscarLivro(req, res) {
        try {
            const { id } = req.params;
            const livro = await LivroService.buscarLivro(Number(id));
            res.status(200).json(livro);
        } catch (erro) {
            console.error(erro);
            res.status(404).json({ error: erro.message });
        };
    };

    async criarLivro(req, res) {
        try {
            const dados = req.body;
            const livro = await LivroService.criarLivro(dados);
            res.status(201).json(livro);
        } catch (erro) {
            console.error(erro);
            res.status(400).json({ error: erro.message });
        };
    };

    async editarLivro(req, res) {
        try {
            const { id } = req.params;
            const dados = req.body;
            const livroAtualizado = await LivroService.editarLivro(Number(id), dados);
            res.status(200).json({ message: "Livro atualizado com sucesso", livroAtualizado })
        } catch (erro) {
            console.error(erro);
            res.status(400).json({ error: erro.message })
        };
    };

    async deletarLivro(req, res) {
        try {
            const { id } = req.params;
            const livroDeletado = await LivroService.deletarLivro(Number(id));
            res.status(200).json({ message: "Livro deletado com sucesso"})
        } catch(erro) {
            console.error(erro);
            res.status(404).json({ error: erro.message })
        }
    }
};


export default new LivroController;