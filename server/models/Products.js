import mongoose from 'mongoose'


const ProductSchema = new mongoose.Schema({
    name: {type: String},

    description: {type: String},

    price: {type: Number},
    
    category: {type: String},

    image: {type: String},

 


}, {timestamps:true})



const ProductModel = mongoose.model('product', ProductSchema)

export default ProductModel