const mongoose = require('mongoose')

const menuitemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    price:{
        type:Number,
        required:true,
    },

    taste:{
        type:String,
        enum:['sweet', 'spicy', 'sour'],
        required:true
    },

    isdrink:{
        type:Boolean,
        required:true,
        default:false
    },

    ingredients:{
        type:[String],
        default:[],
    },

    num_sales:{
        type:Number,
        default:0,
    }


})

const menuItem = mongoose.model('MenuItem', menuitemSchema);

module.exports= menuItem;