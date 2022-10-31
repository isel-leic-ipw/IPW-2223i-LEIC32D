import express from "express";

const app = express()

app.use(express.json())

app.get("/",rootHandler)
app.get("/students", getStudentsHandler)
app.get("/students/:id", getStudentByIdHandler)
app.post("/students", createStudentHandler)
app.delete("/students/:id", deleteStudentHandler)
app.put("/students/:id", updateStudentHandler)

app.listen(8080, ()=>console.log("Server listening in port 8080"))

function createStudentHandler(request, response){
    logRequest(request)
    response.json({message : "createStudent"})
}


function rootHandler(request, response){
    logRequest(request)
    response.send("root")
}

function getStudentsHandler(request, response){
    logRequest(request)
    response.json({message : "getStudents"})
}

function getStudentByIdHandler(request, response){
    logRequest(request)
    response.json({message : "getStudent"})
}



function logRequest(req){

    console.log(req.hostname)
    console.log(req.method)
    console.log(req.url)
    console.log(req.path)
    console.log(req.params)
    console.log(req.query)
    console.log(req.body)
    
}