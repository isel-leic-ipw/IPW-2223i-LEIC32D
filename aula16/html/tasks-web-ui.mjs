function webUiFunction(services){

    const token = "3fa85f64-5717-4562-b3fc-2c963f66afa6"

    function homePage(req, resp){
        resp.send(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Tasks</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <!-- Header -->
                    <a href="/"> Home </a>
                    <a href="/tasks"> Tasks </a>
        
                    <h1>Tasks</h1>
                    <img src="img/tasks.png">
                    <!-- Footer -->
                    <p>Chelas 2021</p>
                </body>
            </html>
        `)
    }


    async function getTasks(req, resp){
        const tasks = await services.getTasks(token)
        resp.send(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Tasks</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <!-- Header -->
                    <a href="/"> Home </a>
                    <a href="/tasks"> Tasks </a>
                    ${tasks.map(t => taskHtml(t)).join('')}
                    </body>
            </html>
        `)
    
    }

    function taskHtml(task){
        return `
            <p>
                Task Info : 
                    <a href="/tasks/${task.id}" >ID = ${task.id}</a> Text = ${task.text}
            </p>
            
        `
    }
    
    async function getTaskById(req, resp){
        const task = await services.getTaskById(req.params.taskId,token )
        resp.send(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Tasks</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <!-- Header -->
                    <a href="/"> Home </a>
                    <a href="/tasks"> Tasks </a>
            
                    <ul>
                        <li>Identifier : ${task.id}</li>
                        <li>Text : ${task.text}</li>
                    </ul>
            
                    <!-- Header -->
                    <p>Chelas 2021</p>
            
                </body>
            </html>
            
        `)
    }
    
    function createTask(req, resp){
        throw new Error("Not Implemented")
    }
    
    return {
        getTasks,
        getTaskById,
        createTask,
        homePage
    }

}

export default webUiFunction