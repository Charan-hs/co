const { json } = require('body-parser');
const express = require('express');
var router = express.Router();
var ObjectID = require('mongoose').Types.ObjectId;


var postcontact = require('../models/post')

router.get('/',(req,res) => {
    postcontact.find((err,docs) => {
        console.log(docs)
        if(!err) res.send(docs)
        else console.log("error in retriving "+(err))
    })
});

router.post('/',(req,res) => {
    console.log(req)
   
        var newContact = new postcontact ({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            address:req.body.address
        })
    
    newContact.save((err,docs) => {
        if(!err){ res.send(docs)}
        else{ console.log("error while saving"+(err))}
    })
})

router.put('/:id',(req,res) => {
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send('No Contact Found Please save then edit')
    }
    var updatedContact ={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address
    }
    postcontact.findByIdAndUpdate(req.params.id,{$set:updatedContact},{new:true},(err,docs) => {
        if(!err) res.send(docs)
        else console.log("error while updating  "+JSON.stringify(err, undefined, 2))
    })
    
})

router.delete('/:id',(req,res) => {
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send('No Contact Found Please save then delete')
    }
    postcontact.findByIdAndDelete(req.params.id,(err,docs) => {
        if(!err) res.send(docs)
        else console.log("error while deletingg"+json.toString(err))
    })
})

module.exports = router
