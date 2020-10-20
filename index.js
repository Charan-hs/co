require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');


var postContactRoutes = require('./controllers/contactcontroller')
const buildPath = path.join(__dirname+'/conreact/build');

const PORT = process.env.Port || 4000;
var app = express()
app.use(express.static(buildPath));
app.use(bodyParser.json())
app.use(cors())



app.listen(PORT,()=>console.log('Server started '))


app.use('/postContact',postContactRoutes)