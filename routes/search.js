const express = require('express');
const router = express.Router();
var search = require('../modal/search');


  

router.get('/', async function(req, res, next) {
     
    const user =  await search.findOne({ name: req.body.name, city: req.body.city });
    console.log(req.body.name);
    console.log(user)
    if (user) {
        return res.status(400).send('Search found');
    } else {
        
        return res.status(400).send('Search not  found');
      
    }
    

  
});

module.exports= router;