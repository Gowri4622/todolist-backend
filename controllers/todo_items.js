const getAllToDoItems = (request,response)=>{
    response.send("List of all to do items")
}
const createNewToDoItems = (request,response)=>{
    response.json(request.body)
}
const getAllToDoItem = (request,response)=>{
    response.send(`Displaying item with id ${request.params.id}`)
}

const updateToDoItem = (request,response)=>{
    response.send(`Updating item with id ${request.params.id}`)
}

const deleteToDoItem = (request,response)=>{
    response.send(`Deleting item with id ${request.params.id}`)
}
module.exports={getAllToDoItems,createNewToDoItems,getAllToDoItem,updateToDoItem,deleteToDoItem}