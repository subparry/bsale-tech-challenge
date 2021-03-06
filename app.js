const express = require('express')
const productsRouter = require('./routes/productsRouter')
const app = express()

app.use(express.static(__dirname + '/public'))

app.use(productsRouter)

module.exports = app
