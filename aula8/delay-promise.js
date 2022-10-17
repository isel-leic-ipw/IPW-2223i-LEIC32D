function delay(timeout, success, cb){
    setTimeout(()=>{
        if(!success) return cb('5xx or 4xx', null)
        cb(null,'2xx')
    },timeout)
}


function delayPromise(timeout, success){
    return new Promise((resolve, reject)=>{
            if(!success) delay(timeout, false, reject)
            else delay(timeout, true, (error, result) => resolve(result))
        })
    }

delayPromise(1000, true)
    .then(result => console.log("Success " + result))
    .catch(err => console.log("Error " + err))


delayPromise(2000, false)
    .then(result => console.log("Success " + result))
    .catch(err => console.log("Error " + err))


/*

*/
console.log('Done Really?')