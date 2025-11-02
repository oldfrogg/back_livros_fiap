import Livro from "../models/livros.js";

class LivroRepository {

    // Listar todos os livros cadastrados no BD
    async listarLivros() {
        return await Livro.findAll();
    }

    // Mostra o livro com o Id passado no parâmetro query
    async buscarLivro(id) {
        return await Livro.findByPk(id);// Não precisa do where: {id: id}, pois o sequelize já faz isso na findByPk
    }

    // Crio um livro novo no BD passando os dados como parâmetro no body da requisição
    async criarLivro(dados) {
        return await Livro.create(dados);
    }

    // Edito os dados de um livro existente no BD, passando como parâmetro query seu Id e os dados como parâmetro body
    async editarLivro(id, dados) {
        return await Livro.update(dados, { where: { id: id } }) // Poderia ser só where: { id }, já que utiliza o mesmo nome
    }

    // Excluo um livro do BD, passando como parâmetro query o seu Id
    async deleteraLivro(id) {
        return await Livro.destroy( { where: { id : id } })
    }
}

// Crio a instância na exportação, permitindo utilizar já como objeto, ao invés de criá-lo onde eu importar.
export default new LivroRepository;