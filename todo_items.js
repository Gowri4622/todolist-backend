const express=require('express')
const router = express.Router()

router.get('/',(request,response)=>{
    response.send("List of all to items")
})

module.exports=router