const express=require('express')
require('dotenv').config()
const db=require('./databse/connection')
const bodyParser=require('body-parser')
const morgan=require('morgan')
const expressValidator=require('express-validator')


const categoryRoute=require('./routes/categoryRoutes')
const productRoute=require('./routes/productRoute')

// main app
const app=express()

// middleware
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(expressValidator())


//routes
app.use('/api',categoryRoute)
app.use('/api',productRoute)



// to read port number from .env file
const port=process.env.PORT



// to start with server
app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})