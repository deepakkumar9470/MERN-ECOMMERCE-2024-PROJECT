import multer from 'multer'

const storage = multer.diskStorage({

      destination : (req,file,cb)=>{
        cb(null, './public/images')
},

      filename : (req,file,cb)=>{
         const uniqueSuffix = Date.now()+ "-" + Math.round(Math.random()*1e9)
         cb(null,file.fieldname + "-" + uniqueSuffix + ".png")
      }

})

const upload = multer({storage})

export default upload