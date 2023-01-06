import {convertToHttpError} from './errors/http-errors.mjs'

function webUiFunction(services){


    function homePage(req, resp){
        resp.render("home", {username : getUserName(req)})
    }


    async function getTasks(req, resp){
        try{
            const tasks = await services.getTasks(getToken(req))
            resp.render("tasks-list", {tasks : tasks, scriptName : "tasks-list", username : getUserName(req)})
        }catch(err){
            const httpError = convertToHttpError(err)
            resp.status(httpError.status).json(httpError.body) //TODO 
        } 
    }

    async function getTaskById(req, resp){

        const task = await services.getTaskById(req.params.taskId,getToken(req))
        resp.render("task", {task:task, username : getUserName(req)})
        
    }
    
    async function createTask(req, resp){
        const task = await services.createTask(req.body.text ,getToken(req))
        //resp.status(303)
        //resp.set('location',`/tasks/${task.id}`)
        //resp.end()
        resp.redirect(303,`/tasks/${task.id}`)

    }

    async function createTaskView(req, resp){
        resp.render("create-task", {username : getUserName(req)})
    }

    async function updateTaskView(req, resp){
        const task = await services.getTaskById(req.params.taskId,getToken(req))
        console.log(task)
        resp.render("update-task", {task: task, scriptName : "update-task", username : getUserName(req)})
    }


    function getToken(req) {
        return req.user && req.user.token;
    }
    
    function getUserName(req) {
        return req.user && req.user.userName;
    }
    
    return {
        createTaskView,
        getTasks,
        getTaskById,
        createTask,
        homePage,
        updateTaskView
    }

}

export default webUiFunction