import { write } from 'node:fs'
import fs from 'node:fs/promises'

const data = "HELLO WORLD"

const writePromise = fs.writeFile("file2.txt",data)

writePromise
    .then(() => console.log("Success"))
    .catch(error => console.log(error))

console.log("DONE REALLY?")