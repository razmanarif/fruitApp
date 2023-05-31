const express = require('express');
const app = express()
const fruits = require("./model/fruits_data")
const methodOverride = require('method-override')

// to import dot env
require('dotenv').config();

const port = process.env.PORT || 5000

// console.log(process.env.SECRET)
// const port = 3006;

// init and set view/ template engine
app.set("view engine", "ejs")

// this middleware is to parse the req.body
app.use(express.urlencoded({extended:false}))

// to add css and pictures
app.use(express.static('public'))

// use method override
app.use(methodOverride('_method'))

//import the router
const greet = require("./controller/greet")
const fruitsRoute = require("./controller/fruits")

// controller middleware
app.use("/greet", greet)
app.use("/fruits", fruitsRoute)

// Home route to display all fruit
app.get('/', (req,res)=>{
    res.render("index.ejs", {fruits:fruits} )
})

app.listen(port, ()=>{
    console.log(`App is running on ${port}`)
})