import services from './tasks-services.mjs'

function getTasks(req, resp){
    console.log(req.query)
    resp.json(services.getTasks())
}

function getTaskById(req, resp){
    console.log(req.params)
    resp.json(services.getTaskById(req.params.taskId))
}

function createTask(req, resp){
    console.log(req.body)
    const task = services.createTask(req.body.text)
    resp.status(201).json(task)
}

export const webapi ={
    getTasks,
    getTaskById,
    createTask
}

export default webapi
