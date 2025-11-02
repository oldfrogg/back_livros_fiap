import LivroRepository from "../repositories/livroRepository.js";

class LivroService {

    _validarId(id) {
        if (isNaN(id)) throw new Error("Id inválido");
    }

    _validarDados(dados) {
        if (!dados.nome || dados.nome.trim() === "") throw new Error("O nome do Livro é obrigatório");
        if (!dados.autor || dados.autor.trim() === "") throw new Error("O nome do Autor é obrigatório");
        if (isNaN(dados.ano)) throw new Error("O ano obrigatório e deve ser um número");
        if (!dados.editora || dados.editora.trim() === "") throw new Error("O nome da Editora é obrigatório");
    }

    // Listar todos os livros
    async listarLivros() {
        return await LivroRepository.listarLivros();
    }

    // Encontrar um livro através do seu Id
    async buscarLivro(id) {
        this._validarId(id);

        const livro = await LivroRepository.buscarLivro(id);
        if (!livro) throw new Error("Livro não encontrado");
        return livro;
    }

    async criarLivro(dados) {
        this._validarDados(dados);
        return await LivroRepository.criarLivro(dados);
    }

    async editarLivro(id, dados) {
        this._validarId(id);
        await this.buscarLivro(id);
        this._validarDados(dados);

        const [atualizados] = await LivroRepository.editarLivro(id, dados);

        if (atualizados === 0) throw new Error("Não foi possível atualizar o Livro");
        return await this.buscarLivro(id);
    }

    async deletarLivro(id) {
        this._validarId(id);
        await this.buscarLivro(id);

        const deletados = await LivroRepository.deleteraLivro(id);

        if (deletados === 0) throw new Error("Não foi possível deletar o livro");
        return;
    }
}

export default new LivroService;