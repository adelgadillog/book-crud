const express = require('express')

const app = express()

const port = 3001

const bookRouter = require('./app/route/book-route')

app.use(bookRouter)




app.listen(port,()=>{
    console.log('La aplicacion en linea')
})