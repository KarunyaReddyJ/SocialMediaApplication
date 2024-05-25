const mongoose = require('mongoose');
const URI='mongodb://127.0.0.1:27017/app'

const connectDb=async()=>{
    try {
        await mongoose.connect(URI)
    } catch (error) {
        console.log(error)
    }
}

module.exports=connectDb