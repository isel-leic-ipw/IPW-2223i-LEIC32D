import fetch from 'node-fetch'

function fetchLoripsum(){
    return fetch("https://loripsum.net/api/short/plaintext")
        .then(response => { 
            console.log(response.status)
            return response.text()
        })     
}

function main(){
    fetchLoripsum() 
        .then(body => console.log("BODY" , body))
        .catch(err => console.log("Error", err))
}

main()