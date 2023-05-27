const express=require('express')
const app = express()
const todo=require('./todo_items')
const PORT=3500

app.get('/',(request,response)=>{
    response.send("Working properly")
})
app.use('/api/v1/todo_items',todo)
app.listen(PORT, console.log("Server runs at http://localhost:3500"))