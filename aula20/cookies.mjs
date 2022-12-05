import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser())
app.get('/', rootHandler)
app.get('/addCover', addCover)
app.get('/addSmartphone', addSmartphone)
app.get('/seeBag', seeBag)

app.listen('9000', ()=>{console.log('Listening')})


function rootHandler(req, res){
    
    if(!req.cookies.bag){
        
        res.cookie("bag" , JSON.stringify({items : [],value : 0}) )
    } 
    res.send(`
            <html>
                <head>
                    <title>Cookies Tests</title>
                </head>
                <body>
                    <a href="/seeBag"> see Bag </a>
                    <p><a href="/addSmartphone"> Add Smartphone </a></p>
                    <p><a href="/addCover"> Add Cover </a></p>
                </body>
             </html>`)
}


function addSmartphone(req, res){
    console.log(req.cookies.bag)
    const bag = JSON.parse(req.cookies.bag)
    bag.items.push("SmartPhone")
    bag.value+=100
    res.cookie("bag", JSON.stringify(bag))
    res.redirect(303,'/')

}

function addCover(req, res){
    console.log(req.cookies.bag)
    const bag = JSON.parse(req.cookies.bag)
    bag.items.push("Cover")
    bag.value+=50
    res.cookie("bag", JSON.stringify(bag))
    res.redirect(303,'/')
}

function seeBag(req, res){
    //console.log(req.cookies)
    console.log(req.get('Cookie'))
    res.send(`${req.cookies.bag}
           <a href="/"> Root </a>`)
}