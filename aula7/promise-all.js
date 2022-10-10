//TPC Passar para Async/Await

import fetch from 'node-fetch'

function fetchLoripsum(){
    return fetch("https://loripsum.net/api/short/plaintext")
        .then(response => { 
            console.log(response.status)
            return response.text()
        })
}

function main(){
    const p1 = fetchLoripsum()
    const p2 = fetchLoripsum()
    const promises = [p1,p2]
    Promise.all(promises)
        .then(results => console.log("Results = ",results))
        .catch(error => console.log("Error = ", error))
   
    console.log("DONE Really?") 
}

main()

