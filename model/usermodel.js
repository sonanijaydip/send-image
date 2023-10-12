var mongoose = require('mongoose');

// scheme //

var user_schema = new mongoose.Schema({
 name:{
     type: String
 },
mention:{
     type: String
},
image:{
     type: String
}

})

module.exports = mongoose.model('user',user_schema);