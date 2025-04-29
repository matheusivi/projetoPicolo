const express = require('express');
const connectDB = require('./db')
const app = express()

const pessoaRouter = require('./routers/pessoaRouter')
const filmeRouter = require('./routers/filmeRoutes')
const avaliacaoRouter = require('./routers/avaliacaoRouter')

app.use(express.json())

app.use('/pessoas', pessoaRouter)
app.use('/filmes', filmeRouter)
app.use('/avaliacoes', avaliacaoRouter)


connectDB().then(() =>
    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000')
    })
)

