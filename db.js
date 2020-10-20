const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:123@cluster0.o8vvw.gcp.mongodb.net/bindata?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},
    (err) => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error while connecting MongoDB : ' + (err))
    })