import data from './tasks-data-mem.mjs'

function getTasks(req, resp){
    console.log(req.query)
    resp.json(data.getTasks())
}

function getTaskById(req, resp){
    console.log(req.params)
    resp.json(data.getTaskById(req.params.taskId))
}

function createTask(req, resp){
    console.log(req.body)
    const task = data.createTask(req.body.text)
    resp.status(201).json(task)
}

export const webapi ={
    getTasks,
    getTaskById,
    createTask
}

export default webapi
