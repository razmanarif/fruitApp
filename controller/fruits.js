const express = require("express");

const router = express.Router();
const fruits = require("../model/fruits_data");

// Create new fruit form
router.get("/new", (req,res)=>{
    res.render("new.ejs")
})

router.get("/:id/edit", (req,res)=>{
    let id = req.params.id
    res.render("edit.ejs", {id:id , fruit: fruits[id]})
})

// To get idividual fruit details
router.get("/:index", (req,res)=>{
    let index = req.params.index

    res.render("fruit.ejs", {fruit: fruits[index]})
})



// To post new fruit data
router.post("/", (req,res)=>{
  //console.log(req.body.readyToEat)
    if(req.body.readyToEat == "on"){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    fruits.push(req.body)
    res.redirect("/")
})

// Delete individual fruit
router.delete("/delete/:id", (req,res)=>{
    let id = req.params.id
    //console.log(id);

    fruits.splice(id, 1)

    res.redirect("/")
})

// Edit route
router.put("/:index", (req,res)=>{

    let id = req.params.index

    console.log(req.body)
    fruits[id] = req.body

    res.redirect("/")
})



module.exports = router;