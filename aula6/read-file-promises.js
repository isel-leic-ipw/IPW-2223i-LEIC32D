import fs from 'node:fs/promises'

const readPromise = fs.readFile("file1.txt")

readPromise
    .then(data => console.log(data.toString()))
    .catch(error => console.log("Catch1",error))
    .then(rrr => console.log(rrr))
    .catch(error => console.log("Catch2",error))
    
console.log("DONE REALLY?")




   