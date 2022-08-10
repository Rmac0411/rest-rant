require('dotenv').config()
const express = require('express')
const app = express()

//Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//Controllers Route
app.use('/places', require('./controllers/places'))

//Homepage Route
app.get('/', (req, res) =>{
    res.render('home')
})

//Wildcard Route
app.get('*', (req,res) =>{
    res.status(404).render('error404')
})

app.listen(process.env.PORT)