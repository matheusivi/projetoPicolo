const Avaliacao = require('../model/Avaliacao');

const createAvaliacao = async (req, res) => {
    try{
        const novaAvaliacao = new Avaliacao(res.body)
        const avaliacaoSalvo = await novaAvaliacao.save()
        res.status(201).json(avaliacaoSalvo) 
    }catch(error){
        res.status(400).json({ message: error.message})
    }
}

const getAvaliacoes = async (req, res) => {
    try{
        const avaliacoes = await Avaliacao.find()
        res.json(avaliacoes)
    } catch (error) {
        res.status(500).json( { message: error.message })
    }
}

const getAvaliacoesById = async (req, res) => {
    try{
        const avaliacoes = await Avaliacao.findById(req.params.id)
        if(!avaliacoes){
            return res.status(404).json( { message: 'Avaliação não encontrada'})
        }
        res.json(avaliacoes)
    }catch ( error) {
        res.status(500).json( { message: error.message})
    }
}

const updateAvaliacao = async (req, res) => {
    try{
        const avaliacao = await Avaliacao.findByIdAndUpdate(req.params.id)
        if(!avaliacao) {
            return res.status(404).json({ messagE: 'Avaliação não encontrada'})
        }
        res.json(avaliacao)
    }catch ( error ) {
        res.status(500).json( { message: error.message })
    }
}

const deleteAvaliacao = async (req, res) => {
    try{
        const avaliacao = await Avaliacao.findByIdAndDelete(req.params.id, req.body, { new: true })
        if(!avaliacao){
            res.status(404).json({ message: 'Avaliação não encontrada'})
        }
        res.json({ message: 'Avaliação deletada com sucesso'})
    }catch ( error ) {
        res.status(500).json({ message: error.message})
    }
}

module.exports = {
    createAvaliacao,
    getAvaliacoes,
    getAvaliacoesById,
    deleteAvaliacao,
    updateAvaliacao
}