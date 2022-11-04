import data from './tasks-data-mem.mjs'


function getTasks(){
    return data.getTasks()
 }
 
 function getTaskById(id){
    //validacao se o id não é undefined
    //verificar se existe task com este id
    return data.getTaskById(id)
 }
 
 function createTask(text){
     return data.createTask(text)
 }
 
 export const services ={
     getTasks,
     getTaskById,
     createTask
 }
 
 export default services