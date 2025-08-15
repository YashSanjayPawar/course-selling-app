const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/user/signin', (req, res) => {
  res.json({
    message:"singin success"
  })
})


app.post('/user/signup', (req, res) => {
  res.json({
    message:"singin success"
  })
})

app.get('/courses', (req, res) => {
  res.send('Hello World!')
})
 app.get('/user/purchase', (req, res) => {
  res.json({
    message:"course purchased are here to see"
  })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
