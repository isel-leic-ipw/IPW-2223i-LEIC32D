/* From https://www.elastic.co/guide/en/elastic-stack-glossary/current/terms.html#d-glos
index - Collection of JSON documents. 
document - JSON object containing data stored in Elasticsearch
*/

//curl -X DELETE http://localhost:9200/tasks
//curl -X PUT http://localhost:9200/tasks
//curl -X POST --data '{"text" : "task 1"}' -H "Content-Type: application/json" http://localhost:9200/tasks/_doc
//curl -X POST --data '{"text" : "task 2"}' -H "Content-Type: application/json" http://localhost:9200/tasks/_doc


import fetch from 'node-fetch'

const baseURL = "http://localhost:9200/"

function createTask(text){
    const body = {
        text : text
    }
    return fetch(baseURL + `tasks/_doc`, {
        method : "POST",
        body : JSON.stringify(body),
        headers : {
            "Content-Type" : "application/json", 
            "Accept" : "application/json"}
     })
    .then(response => response.json())
    .then(result => {return {id : result._id, text : text}})    
}

function getTaskById(id){
    return fetch(baseURL + `tasks/_doc/${id}`, {
                headers : {"Accept" : "application/json"}
        })
        .then(response => response.json())
        .then(body => body._source )
}

function getTasks(){
    return fetch(baseURL + `tasks/_search`, {
        headers : {"Accept" : "application/json"}
    })
    .then(response => response.json())
    .then(body => body.hits.hits.map(t => t._source))
}

export const data ={
    getTasks,
    getTaskById,
    createTask
}

export default data



