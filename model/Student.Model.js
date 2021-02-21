const mongoose = require('mongoose')
 
const StudentSchema = mongoose.Schema({

    name :
    {
        type : "String"
    },
    address : 
    {
        type : "String"
    }
})
mongoose.model('Student',StudentSchema)