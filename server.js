const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
const router = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', router)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))