
const tasks = [
    {id : 1, text : "study tds"},
    {id : 2, text : "study isi"},
]

let nextTaskId = 3

function getTasks(){
   return tasks
}

function getTaskById(id){
   return tasks.find( t => t.id == id)
}

function createTask(text){
    const task = {id : nextTaskId , text : text}
    tasks.push(task)
    ++nextTaskId
    return task
}

export const data ={
    getTasks,
    getTaskById,
    createTask
}

export default data