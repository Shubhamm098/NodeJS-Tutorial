const express = require('express')
const router = express.Router();
const Person = require('./../models/person')

router.post('/', async (req, res) => {
    try {
      console.log('Request Body:', req.body); // Add this line
      const data = req.body;
      const newPerson = new Person(data);
      const savedPerson = await newPerson.save();
      console.log("Data saved:", savedPerson);
      res.status(200).json(savedPerson);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  router.get('/', async (req, res)=>{
    try {
      const data = await Person.find({work:'chef'})
      console.log("data fetched", data)
      res.status(200).json(data)
    } catch (error) {
      console.log("error",error)
      res.status(400).json(error)
      
    }
  })
  
  router.get('/:worktype', async (req, res)=>{
 
    try {
     const worktype = req.params.worktype;
     if(worktype=='chef' || worktype=='manager' || worktype=='waiter'){
         const response = await Person.find({work:worktype})
         console.log("response fetched")
         res.status(200).json(response)
     }
     else{
       res.status(404).json({error: 'invalid worktype'});
     }
    } catch (error) {
     console.log("error aa gaya bc", error)
     res.status(500).json({error:"internal erver error"})
    }
   })

   router.put('/:id',async (req, res)=>{
    try {
      const personId = req.params.id;
      const updatedPersonData = req.body;
      const response = await Person.findByIdAndUpdate(personId, updatedPersonData,{
      new:true,
      runValidators:true
      })
      if(!response){
        return res.status(404).json({error:'Person not found'})
      }

      console.log('data updated')
      res.status(200).json(response)
    } catch (error) {
      console.log("error aa gaya bc", error)
      res.status(500).json({error:"internal erver error"})
    }
  })

  router.delete('/:id', async(req, res)=>{
    try {
      const personId = req.params.id;
      const deletedId = await Person.findByIdAndDelete(personId)
     
      if(!deletedId){
        console.log("person not found")
        res.status(404).json({message: "user not found"})
      }
      console.log("user deleted")
      res.status(200).json({message:"person deketed"})
    } catch (error) {
      console.log("error aa gaya bc", error)
      res.status(500).json({error:"internal erver error"})
    }

  })

   module.exports= router;