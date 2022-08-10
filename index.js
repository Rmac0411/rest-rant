require('dotenv').config()
const express = require('express')
const app = express()

//View Engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Controllers Route
app.use('/places', require('./controllers/places'))

//Homepage Route
app.get('/', (req, res) =>{
    res.render('home')
})

//Wildcard Route
app.get('*', (req,res) =>{
    res.status(404).send('<h1>404 PAGE</h1>')
})

app.listen(process.env.PORT)