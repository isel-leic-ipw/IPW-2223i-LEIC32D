import express from 'express'

import data from './tasks-data-mem.mjs'
import servicesFunction from './tasks-services.mjs'
import webApiFunction from './tasks-webapi.mjs'
import webUIFunction from './tasks-web-ui.mjs'


const services = servicesFunction(data)
const webapi = webApiFunction(services)
const webui = webUIFunction(services)

const app = express()

app.use(express.json())

app.get("/api/tasks", webapi.getTasks)
app.get("/api/tasks/:taskId", webapi.getTaskById)
app.post("/api/tasks", webapi.createTask)

app.get("/", webui.homePage)
app.get("/tasks", webui.getTasks)
app.get("/tasks/:taskId", webui.getTaskById)


app.listen(9000, ()=>console.log("Listening..."))



