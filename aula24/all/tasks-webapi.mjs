import {convertToHttpError} from './errors/http-errors.mjs'

function webapi(app, services){

    app.use("/api",authorizationMw)

    function authorizationMw(req, rsp, next) {
        if(req.get('Authorization')){
                req.user = {
                token: req.get('Authorization').split(' ')[1]
            }
        }
        next()
    }

    function getTasks(req, resp){
        console.log(req.query)
        return services.getTasks(getToken(req))
                .then(tasks => resp.json(tasks))
                .catch(error =>{
                    const httpError = convertToHttpError(error)
                    resp.status(httpError.status).json(httpError.body)
                })
    }
    
    function getTaskById(req, resp){
        console.log(req.params)
        return services.getTaskById(req.params.taskId, getToken(req))
                .then(task => resp.json(task))
    }
    
    function createTask(req, resp){
        console.log(req.body)
        return services.createTask(req.body.text, getToken(req))
                .then(task =>resp.status(201).json(task))
    }

    function updateTask(req, resp){
        services.updateTask(req.params.taskId, req.params.text, getToken(req))
            .then(task => resp.json(task))
            .catch( err  => {
                const httpError = httpErrors.convertToHttpError(err)
                resp.status(httpError.status).json(httpError.body)
            })
    }
    function deleteTask(req, resp){
        console.log("deleteTask")
        resp.json({message : `deleteTask id = ${req.params.taskId}` })
    }

    function getToken(req) {
        return req.user && req.user.token;
    }

    
    return {
        getTasks,
        getTaskById,
        createTask,
        updateTask,
        deleteTask
    }

}

export default webapi


