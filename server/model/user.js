const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        default: ''
    },
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    email: {
        type: String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    Admin:{
        type:Boolean,
        default:false
    },
    city:{
        type:String,
        default:''
    },
    state:{
        type:String,
        default:''
    },
    country:{
        type:String,
        default:''
    }
});

const User = mongoose.model('User', userSchema);
const postSchema=new mongoose.Schema({
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    content:{
        type:String,
        required:true
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    comments:[{
        commentor:{
            type:mongoose.Schema.Types.ObjectId,
        ref:'User'
        },
        comment:{
            type:String,
            required:true
        }
    }],
    shares:{
        type:Number,
        default:0
    },
    postedOn:{
        type:Date,
        default:Date.now()
    }
})

const Post=mongoose.model('Post',postSchema)


const requestSchema=new mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    receiver:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})
const Request=mongoose.model('Request',requestSchema)
module.exports = {User,Post,Request};
