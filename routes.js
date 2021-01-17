const express = require('express')
const router = express.Router()
const upload = require('./middleware/upload')
const Resize = require('./Resize')
const path = require('path')

router.get('/', (req, res) => res.render('index'))
router.post('/profile', upload.single('image'), async function (req, res) {

  const username = req.body.name
  const surname = req.body.lastname
  const imagePath = path.join(__dirname, '/public/images')
  const fileUpload = new Resize(imagePath)

  if (!req.file) {
    res.status(401).json({
      error: 'Please provide an image'
    })
  }

  const filename = await fileUpload.save(req.file.buffer)
  return res.status(200).render('profile', {
    imagename: filename,
    firstname: username,
    lastname: surname
  })
})

module.exports = router