const Filme = require('../model/Filmes');

const createFilme = async(req, res) => {
    try{
        const novoFilme = new Filme(req.body)
        const filmeSalvo = await novoFilme.save()
        res.status(201).json(filmeSalvo)
    }catch(error) {
        res.status(400).json({ message: error.message})
    }
};

const getFilmes = async(req, res) => {
    try{
        const filmes = await Filme.find()
        res.json(filmes)
    }catch(error) {
        res.status(500).json({ message: error.message})
    }
}

const getFilmesById = async(req, res) => {
    try{
        const filme = await Filme.findById(req.params.id)
        if(!filme){
            return res.status(404).json({ message: 'Filme não encontrado'})
        }
        res.json(filme)
    }catch(error){
        res.status(500).json({ message: error.message })
    }
}

const updateFilme = async (req, res) => {
    try{
        const filme = await Filme.findByIdAndUpdate(req.params.id, req.body, { new: true})
        if(!filme) {
            return res.status(404).json( { message: 'Filme não encontrado'})
        }
        res.json(filme)
    }catch(error) {
        res.status(500).json( { message: error.message})
    }
}

const deleteFilme = async (req, res) => {
    try{
        const filme = await Filme.findByIdAndDelete(req.params.id)
        if(!filme){
            res.status(404).json({ message: 'Fime não encontrado'})
        }
        res.json({ message: 'Filme deletado com sucesso'})
    }catch(error) {
        res.status(500).json( { message: error.message })
    }
}

module.exports = {
    createFilme,
    getFilmes,
    getFilmesById,
    deleteFilme,
    updateFilme
}