const express = require('express')
const path = require('path')
const app = express()
const multer = require('multer')
const { pdfMerge } = require('./mergePDF')
const upload = multer({ dest: 'uploads/' })
app.use('/static', express.static('public'))
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./templates/index.html"))
})
app.get('/pdfList', (req, res) => {
  res.sendFile(path.join(__dirname, "./templates/list.html"))
})
app.get('/mergeOption1', (req, res) => {
  res.sendFile(path.join(__dirname, "./templates/mergeOption1.html"))
})
app.get('/mergeOption2', (req, res) => {
  res.sendFile(path.join(__dirname, "./templates/mergeOption2.html"))
})
app.get('/mergeOption3', (req, res) => {
  res.sendFile(path.join(__dirname, "./templates/mergeOption3.html"))
})

app.post('/mergePDF', upload.array('pDFs', 1000000), async (req, res, next) => {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
  let pDfsID = await pdfMerge(path.join(__dirname, req.files[0].path),path.join(__dirname, req.files[0].path))
  res.redirect(`http://localhost:3000/static/${pDfsID}.pdf`)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

