const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
const router = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))