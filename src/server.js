require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME


//config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//khai bao route 
app.get('/', (req, res) => {
    res.send('Hello World! & nodemon 12315')
})
app.get('/abc', (req, res) => {
    res.render('sample.ejs')
})
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})