const mongoose = require('mongoose');
const URI=//USE_YOUR_DB_URI

const connectDb=async()=>{
    try {
        await mongoose.connect(URI)
    } catch (error) {
        console.log(error)
    }
}

module.exports=connectDb