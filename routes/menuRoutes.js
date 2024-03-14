const express = require('express')
const router = express.Router();
const menuItem = require('./../models/menu')
const Person = require('./../models/person')

router.post('/', async (req, res)=>{
    try {
      const data = req.body;
      const newMenu = new menuItem(data);
      const savedmenu = await newMenu.save();
      console.log("menu Saved", savedmenu);
      res.status(200).json(savedmenu);
  
    } catch (error) {
      console.log("error saving menu", error)
      res.status(500).json({error: "internal server error"})
    }
  })
  
  router.get('/:taste', async (req, res)=>{
    try {
          const taste = req.params.taste;
          if(taste=='spicy' || taste=='sour' || taste=='sweet'){
            const response = await menuItem.find({taste:taste})
            console.log("response fetched")
            res.status(200).json(response)
          }
          else{
            res.status(404).json("error bc")
          }
    } catch (error) {
      console.log("error aa gaya bc", error)
      res.status(500).json({error:"internal erver error"})
    }
  })

 


module.exports = router;