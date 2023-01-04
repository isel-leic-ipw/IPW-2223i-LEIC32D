import express from 'express'

import data from './tasks-data-mem.mjs'
//import data from './tasks-data-elastic.mjs'
import servicesFunction from './tasks-services.mjs'
import webApiFunction from './tasks-webapi.mjs'
import webUIFunction from './tasks-web-ui.mjs'
import authUIFunction from './auth-web-ui.mjs'

const app = express()

const services = servicesFunction(data)
const webapi = webApiFunction(services)
const webui = webUIFunction(services)
const authui = authUIFunction(app, services)

app.set('views', 'views');
app.set('view engine', 'hbs');

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static('public'))

app.get("/api/tasks", webapi.getTasks)
app.get("/api/tasks/:taskId", webapi.getTaskById)
app.post("/api/tasks", webapi.createTask)

app.get("/login", authui.getLogin)
app.post("/logout", authui.postLogout)
app.post("/login", authui.postLogin)

app.get("/", webui.homePage)
app.get("/tasks", webui.getTasks)
app.get("/tasks/:taskId", webui.getTaskById)
app.get("/createtask", webui.createTaskView)
app.post("/tasks", webui.createTask)
app.post("/tobedefined/:id", webui.deleteTask)


app.listen(9000, ()=>console.log("Listening..."))




