import express  from "express"

const app = express()

app.use(middleware1)
app.use(middleware2)
app.use(middleware3)

app.get("/", rootHandler)

app.listen(9000, ()=>console.log("Listening..."))

function middleware1(request, response, next){
    console.log("Entrei no middleware1")
    request.date = new Date()
    console.log(request.date)
    next()
    
    console.log("Sai do middleware1")
}

function middleware2(request, response, next){
    console.log("Entrei no middleware2")
    if(!request.headers.authorization) {
        response.status(401)
        response.end()
        return
    }
    next()
    console.log("Sai do middleware2")
}

function middleware3(request, response, next){
    console.log("Entrei no middleware3")
    next()
    console.log("Sai do middleware3")
}

function rootHandler(request, response){
    console.log("Root Handler", request.date)
    response.send(`Root - ${request.date}`)
}
