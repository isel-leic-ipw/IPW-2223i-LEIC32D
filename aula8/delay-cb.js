
function delay(timeout, success, cb){
    setTimeout(()=>{
        if(!success) return cb('5xx or 4xx')
        cb(null,'2xx')
    },timeout)
}

delay(1000, true, (err,result)=>{
    if(err) return console.log("Error " + err)
    console.log("Success " + result)
})
delay(2000, false, (err,result)=>{
    if(err) return console.log("Error " + err)
    console.log("Success " + result)
})

console.log('Done Really?')