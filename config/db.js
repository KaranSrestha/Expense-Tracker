const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/ExpenseTrackerDB');
    }catch(e){
        console.error(e.meaasge);
        process.exit(1);
    }
}

module.exports = connectDB;