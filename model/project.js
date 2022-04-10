const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const project = mongoose.Schema({
    type:{
        type:String
    },
    buget:{
        type:Number
    },
    localisaton:{
        type:String
    },
    ressource:{
        type:String
    },
    estimation:{
        type:String
    },
    description:{
        type:String
    },
    status:{
        type:String
    },
    userId:{
        type: mongoose.Types.ObjectId,
    },
    buyerId:{
        type: mongoose.Types.ObjectId
    }
},

    {
        timestamps: true,
        collection: "projects"
      }
    
  );
    
    module.exports = mongoose.model("Projects", project);