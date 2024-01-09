require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('This is Home Screen')
});

app.get('/logIn', (req, res) => {
    res.send('This is logIn Screen!')
  });

  app.get('/signIn', (req, res) => {
    res.send('This is SignIn Screen!')
  });

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})