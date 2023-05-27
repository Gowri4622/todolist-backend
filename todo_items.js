const express=require('express')
const router = express.Router()
const {getAllToDoItems,createNewToDoItems,getAllToDoItem,updateToDoItem,deleteToDoItem}=require('./controllers/todo_items')
router.route('/').get(getAllToDoItems).post(createNewToDoItems)
router.route('/:id').get(getAllToDoItem).patch(updateToDoItem).delete(deleteToDoItem)

module.exports=router