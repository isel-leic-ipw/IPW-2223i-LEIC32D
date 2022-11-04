import express from 'express'

const app = express()

app.use(express.json())

app.get("/tasks", getTasks)
app.get("/tasks/:taskId", getTaskById)
app.post("/tasks", createTask)

app.listen(8080, ()=>console.log("Listening..."))

const tasks = [
    {id : 1, text : "study tds"},
    {id : 2, text : "study isi"},
]

let nextTaskId = 3

function getTasks(req, resp){
    console.log(req.query)
    resp.json(tasks)
}

function getTaskById(req, resp){
    console.log(req.params)
    resp.json(tasks.find( t => t.id == req.params.taskId))
}

function createTask(req, resp){
    console.log(req.body)
    const task = {id : nextTaskId , text : req.body.text}
    tasks.push(task)
    ++nextTaskId
    resp.status(201).json(task)
}



