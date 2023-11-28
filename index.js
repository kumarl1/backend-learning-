require('dotenv').config();
const express = require('express');

const app = express()
const port = 3000

app.get('/', (req, res) => {
 // res.send('Hello World!')
  res.send('<h1>hasdasd</h1>')
});

app.get('/twitter',(req, res) =>{
   res.send('Lalit sharma ')
})
app.get('/login',(req, res) =>{
  res.send('')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})