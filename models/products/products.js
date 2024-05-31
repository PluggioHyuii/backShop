// import
const mongoose = require('mongoose');

// connect db
const DB = process.env.DB_CONNECTION+process.env.DB_NAME
const connection = mongoose.createConnection(DB)

// schema
const productSchema = new mongoose.Schema({
    Product_Name : String,
    Product_No : String,
    Image : String,
})

// model
const productsModel = connection.model("products",productSchema)

// export
module.exports = productsModel ;
