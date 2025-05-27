const express = require('express')
const router = express.Router()
const avaliacaoController = require('../controllers/avaliacaoController')

router.post('/', avaliacaoController.createAvaliacao)

router.get('/', avaliacaoController.getAvaliacoes)

router.get('/:id', avaliacaoController.getAvaliacoesById)

router.put('/:id', avaliacaoController.updateAvaliacao)

router.put('/:id', avaliacaoController.updateAvaliacao)

router.delete('/:id', avaliacaoController.deleteAvaliacao)

module.exports = router

