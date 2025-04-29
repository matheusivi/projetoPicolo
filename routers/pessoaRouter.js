const express = require('express')
const router = express.Router()
const Pessoa = require('../controllers/pessoaController')

router.post('/', Pessoa.createPessoa)

router.get('/', Pessoa.getPessoas)

router.get('/:id', Pessoa.getPessoasById)

router.put('/:id', Pessoa.updatePessoa)

router.delete('/:id', Pessoa.deletePessoa)

module.exports = router