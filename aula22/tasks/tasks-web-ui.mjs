function webUiFunction(services){

    const token = "3fa85f64-5717-4562-b3fc-2c963f66afa6"

    function homePage(req, resp){
        resp.render("home")
    }


    async function getTasks(req, resp){
        const tasks = await services.getTasks(token)
        resp.render("tasks-list", {tasks : tasks})
    
    }

    async function getTaskById(req, resp){
        const task = await services.getTaskById(req.params.taskId,token)
        resp.render("task", {task:task})
    }
    
    async function createTask(req, resp){
        const task = await services.createTask(req.body.text ,token)
        //resp.status(303)
        //resp.set('location',`/tasks/${task.id}`)
        //resp.end()
        resp.redirect(303,`/tasks/${task.id}`)

    }

    async function createTaskView(req, resp){
        resp.render("create-task", {})
    }

    async function deleteTask(req, resp){
        resp.send("TODO")
    }
    
    return {
        createTaskView,
        getTasks,
        getTaskById,
        createTask,
        homePage,
        deleteTask
    }

}

export default webUiFunction