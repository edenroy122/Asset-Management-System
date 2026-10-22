const mongoose = require('mongoose')
require('dotenv').config()


const connectdb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected ")
    }
    catch (err) {
        console.log("Database Connection Failed", err)
    }
}

module.exports = connectdb