const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req, res) => {
  res.send('POST request to the homepage')
  // code register in here
})

app.get('/home', (req, res) => {
  res.send('GET request to the homepage')
  // code home in here
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})