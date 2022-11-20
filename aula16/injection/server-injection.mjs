import express from 'express'

import data from './tasks-data-mem.mjs'
//import data from './tasks-data-elastic.mjs'
import servicesFunction from './tasks-services.mjs'
import webApiFunction from './tasks-webapi.mjs'

const services = servicesFunction(data)
const webapi = webApiFunction(services)

const app = express()

app.use(express.json())

app.get("/tasks", webapi.getTasks)
app.get("/tasks/:taskId", webapi.getTaskById)
app.post("/tasks", webapi.createTask)

app.listen(9000, ()=>console.log("Listening..."))