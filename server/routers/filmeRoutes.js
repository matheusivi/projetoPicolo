const express = require('express')
const router = express.Router()
const filmeController = require('../controllers/filmeController')

router.post('/', filmeController.createFilme)

router.get('/', filmeController.getFilmes)

router.get('/:id', filmeController.getFilmesById)

router.put('/:id', filmeController.updateFilme)

router.delete('/:id', filmeController.deleteFilme)

module.exports = router