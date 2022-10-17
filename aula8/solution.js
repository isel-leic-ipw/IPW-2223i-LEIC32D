function delayPromise(timeout, success){
    return new Promise((resolve, reject) =>{
        delay(timeout,success, (err, result) => 
                                err ? reject(err):resolve(result))
    })
}