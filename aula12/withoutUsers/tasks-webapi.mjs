import services from './tasks-services.mjs'

function getTasks(req, resp){
    console.log(req.query)
    services.getTasks()
            .then(tasks =>  resp.json(tasks))
           
   
}

function getTaskById(req, resp){
    console.log(req.params)
    services.getTaskById(req.params.taskId)
            .then(task => resp.json(task))
            .catch(error => resp.status(404).json(error))
}

function createTask(req, resp){
    console.log(req.body)
    services.createTask(req.body.text)
            .then(task => resp.status(201).json(task))
    
}

export const webapi ={
    getTasks,
    getTaskById,
    createTask
}

export default webapi