const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Dharmik',(err,data)=>{
     
    if(!err) {console.log("CONNECTED")}
    else console.log("ERROR",err)
    
});
require('./Student.Model')