import {convertToHttpError} from './errors/http-errors.mjs'

function webapi(services){

    function getTasks(req, resp){
        console.log(req.query)
        return services.getTasks(req.header('Authorization'))
                .then(tasks => resp.json(tasks))
                .catch(error =>{
                    const httpError = convertToHttpError(error)
                    resp.status(httpError.status).json(httpError.body)
                })
    }
    
    function getTaskById(req, resp){
        console.log(req.params)
        return services.getTaskById(req.params.taskId, req.header('Authorization'))
                .then(task => resp.json(task))
    }
    
    function createTask(req, resp){
        console.log(req.body)
        return services.createTask(req.body.text, req.header('Authorization'))
                .then(task =>resp.status(201).json(task))
    }
    
    return {
        getTasks,
        getTaskById,
        createTask
    }

}

export default webapi
