const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const PORT = process.env.PORT || 3000

const app = express()
app.set('view engine', 'ejs')
app.use(multer({dest: `./uploads/`}).single('metadata'))

const upload = multer({dest: `uploads/`})

app.route('/')
.get((req, res, next)=>{
res.render('index', {
  name: ' ',
  size: " "
})
next()
})
.post((req, res)=>{
  let {originalname, size} = req.file
  console.log(req.file)
  res.render('index', {
    name: originalname,
    size
  })

})

app.listen(PORT,()=>{
  console.log(`Server started on PORT ${PORT}`)
} )
