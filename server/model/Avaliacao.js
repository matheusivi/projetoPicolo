const mongoose = require('mongoose')

const AvaliacaoSchema = new mongoose.Schema({
    filme_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Filme'},
    pessoa_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Pessoa'},
    comentario: String,
    data_avaliacao: String,
})

module.exports = mongoose.model('Avaliacao', AvaliacaoSchema);