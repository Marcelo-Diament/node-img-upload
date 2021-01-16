const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.send('<h1>Upload de Imagens com Node.js</h1>'))

module.exports = router