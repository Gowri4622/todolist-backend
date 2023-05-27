const express=require('express')
const router = express.Router()
const {getAllToDoItems,createNewToDoItems}=require('./controllers/todo_items')
router.route('/').get(getAllToDoItems).post(createNewToDoItems)

module.exports=router