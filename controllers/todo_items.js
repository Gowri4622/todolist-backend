const getAllToDoItems = (request,response)=>{
    response.send("List of all to do items")
}
const createNewToDoItems = (request,response)=>{
    response.json(request.body)
}
module.exports={getAllToDoItems,createNewToDoItems}