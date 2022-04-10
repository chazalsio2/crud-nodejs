const mongoose = require("mongoose");

const user = mongoose.Schema({
    name:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    },
    projectId:{
        type:mongoose.Types.ObjectId
    }
},

    {
        timestamps: true,
        collection: "users"
      }
    
  );
    
    module.exports = mongoose.model("Users", user);