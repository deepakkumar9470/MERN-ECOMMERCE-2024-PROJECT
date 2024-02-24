import express from 'express'
import { addProduct, deleteProduct, editProduct, getProductById, getProducts } from '../controller/product.js';
import upload from '../utils/fileupload.js';

const router = express.Router();



// @/api/product/add
router.post('/add', upload.single('image'),addProduct)

// @/api/product/get
router.get('/get', getProducts)

// @/api/product/123
router.get('/:id', getProductById)

// @/api/product/123
router.put('/:id', editProduct)

// @/api/product/123
router.put('/:id', deleteProduct)


export default router;