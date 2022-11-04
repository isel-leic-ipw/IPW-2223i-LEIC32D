
const tasks = [
    {id : 1, text : "study tds"},
    {id : 2, text : "study isi"},
]

let nextTaskId = 3

function getTasks(){
    return Promise.resolve(tasks)
}

function getTaskById(id){
   const task = tasks.find( t => t.id == id)
   if(!task) return Promise.reject({error : "NotFound"})
   return Promise.resolve(task)
}

function createTask(text){
    const task = {id : nextTaskId , text : text}
    tasks.push(task)
    ++nextTaskId
    return Promise.resolve(task)
}

export const data ={
    getTasks,
    getTaskById,
    createTask
}

export default data