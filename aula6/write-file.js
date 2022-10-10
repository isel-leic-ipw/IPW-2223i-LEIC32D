import fs from 'node:fs'
//import {readFile} from 'fs'

const data = "HELLO WORLD"

fs.writeFile("file2.txt", data,  processResult)

function processResult(err){
    if(err) console.log("Error ", err)
    else console.log("Success")
}

console.log("DONE REALLY?")