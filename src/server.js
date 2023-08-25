require('dotenv').config() //cau hinh cho file .env de chua bien
const express = require('express') // thu vien express
const configViewEngine = require('./config/ViewEngine') //import cau hinh viewEngine
const webRoutes = require('./routes/web') // import route

const app = express() // tao app cho express
const port = process.env.PORT || 8888 // tao port voi bien lay tu file env
const hostname = process.env.HOST_NAME // tao hostname

//config template engine
configViewEngine(app);


//khai bao route 
app.use('/', webRoutes)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})