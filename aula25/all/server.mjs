import express from 'express'

import data from './tasks-data-mem.mjs'
//import data from './tasks-data-elastic.mjs'
import servicesFunction from './tasks-services.mjs'
import webApiFunction from './tasks-webapi.mjs'
import webUIFunction from './tasks-web-ui.mjs'
import authUIFunction from './auth-web-ui.mjs'

const app = express()

const services = servicesFunction(data)
const authRouter = authUIFunction(services)
const webapi = webApiFunction(services) //TODO explore router

const webui = webUIFunction(services) //TODO explore router

app.set('views', 'views');
app.set('view engine', 'hbs');

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static('public'))

app.use("/api",authorizationMw)

app.use(authRouter)

app.get("/api/tasks", webapi.getTasks)
app.get("/api/tasks/:taskId", webapi.getTaskById)
app.post("/api/tasks", webapi.createTask)
app.delete("/api/tasks/:taskId", webapi.deleteTask)
app.put("/api/tasks/:taskId", webapi.updateTask)

app.get("/", webui.homePage)
app.get("/tasks", webui.getTasks)
app.get("/tasks/:taskId", webui.getTaskById)
app.get("/createtask", webui.createTaskView)
app.get("/tasks/:taskId/update", webui.updateTaskView)
app.post("/tasks", webui.createTask)


function authorizationMw(req, rsp, next) {
    console.log('authorizationMw', req.get('Authorization'))
    if(req.get('Authorization')){
            req.user = {
            token: req.get('Authorization').split(' ')[1]
        }
        
    }
    next()
}

app.listen(9000, ()=>console.log("Listening..."))




