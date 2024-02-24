import dotenv from 'dotenv'
dotenv.config()
// import cloudinary from 'cloudinary'
import {v2 as cloudinary} from 'cloudinary';



// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUD_KEY,
//     api_secret: process.env.CLOUD_SECRET
// });


          
cloudinary.config({ 
  cloud_name: 'deepak-cloud', 
  api_key: '252431446118451', 
  api_secret: 'R_QeTRBYDeaaw9JM18jCHoLX01U' 
});





export default cloudinary