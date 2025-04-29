const mongoose = require('mongoose');

const FilmeSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    ano_lancamento: String,
    duracao: String,
    classificacao: String,
    imagem: String,
    nota: String,
    genero: String,
    diretor: String,
    elenco: [
        {
            nome: String,
            papel: String
        }
    ]
})

module.exports = mongoose.model('Filme', FilmeSchema)