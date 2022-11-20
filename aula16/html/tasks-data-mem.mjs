import {errors} from './errors/tasks-errors.mjs'

const users = [
    {id : 11, userName : "Filipe", token : "3fa85f64-5717-4562-b3fc-2c963f66afa6" },
    {id : 12, userName : "Joao", token : "3fa85f64-5717-4562-b3fc-2c963f66afa7" },
]

const tasks = [
    {id : 1, text : "task1", userId : 11},
    {id : 2, text : "task2", userId : 12},
    {id : 3, text : "task3", userId : 11}
]

//TODO ERRORS

let nextTaskId = 4

function getUserByToken(token){
    const user = users.find(u => u.token == token)
    if(!user) return Promise.reject(errors.NOT_FOUND(token))
    return Promise.resolve(user)
}

function getTasksByUserId(userId){
    return Promise.resolve(tasks.filter(t=>t.userId==userId))
}


function getTaskById(id){
   return Promise.resolve(tasks.find( t => t.id == id))
}

function createTask(text, userId){
    const task = {id : nextTaskId , text : text, userId: userId}
    tasks.push(task)
    ++nextTaskId
    return Promise.resolve(task)
}

export const data ={
    getTaskById,
    createTask,
    getUserByToken,
    getTasksByUserId
}

export default data