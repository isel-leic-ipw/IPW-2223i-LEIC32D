import express from 'express'
import expressSession from 'express-session'
import passport from 'passport'
const app = express() 

app.use(express.urlencoded({extended:false}))

app.use(expressSession({secret : 'PI 2021', resave : true, saveUninitialized : true}))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(serializeUser)
passport.deserializeUser(deserializeUser)

app.post('/login', login)
app.post('/logout', logout)
app.get('/auth/home', homeAuthenticated)
app.get('/', homeNotAuthenticated)

const users = {
	admin: { username: 'admin', email:'admin@mail.pt', password: 'admin' },
	guest: { username: 'guest', email:'guest@mail.pt', password: '1234'  },
}

app.listen(8080, () => console.log('Listening'))

function homeAuthenticated(req, res){
    if(req.isAuthenticated())
    {
        res.send(homeAuthenticatedHTML(req.user.username))
    }else{
        res.status(401).send("not authorized")
    }
}

function homeNotAuthenticated(req, res){
    res.send(homeNotAuthenticatedHTML)
}

function login(req, res){
    console.log(`login  ${req.body.username}`)
    if(validateUser(req.body.username, req.body.password)){
        req.login(users[req.body.username], (err)=>{
            if(err){
                console.log('error :' + error) //TODO
            }else{
                console.log('login success')
            }
            res.redirect('/auth/home')
        })
    }else{
        console.log('not a valid User')
        res.status(401).send('not a valid User');
    }
    
    function validateUser(username, password){
        return users[username] && users[username].password === password;
    }
}

function logout(req, res){
    console.log("logout called")
    req.logout(()=>res.redirect("/"))
    
}

function serializeUser(user, done){
    console.log("serializeUser")
    done(null, user.username)
}

function deserializeUser(username, done){
    console.log("deserializeUser")
    done(null, users[username])
}


const homeNotAuthenticatedHTML = `
    <html>
        <head>
            <meta charset='utf-8'>
            <Title> Demo Passport </Title>
        </head>
        <body>
            <h1>Hello Unknown</h1>
            <form action="/login" method="post">
                Username: <input type="text" name="username">
                Password: <input type="password" name="password">
                <input type="submit" value="Login">
            </form>
        </body>
    </html>`



const homeAuthenticatedHTML = (username) => 
    `<html>
        <head>
            <meta charset='utf-8'>
            <Title> Demo Passport </Title>
        </head>
        <body>
            <h1>Hello ${username}</h1>
            <form action="/logout" method="post">
                <input type="submit" value="Logout">
            </form>
        </body>
    </html>`