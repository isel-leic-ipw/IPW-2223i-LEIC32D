const std1 = {name:"Filipe" , number:"1234"}
const std2 = {name:"Joao" , number:"4321"}

console.log(std1)

std1.email="ffreitas@cc.isel.ipl.pt"

console.log(std1)

delete std1.name

console.log(std1)
console.log(std1.number)
console.log(std1["number"])

//std1 has number, email and m1
std1.m1 = function() {console.log("Student")}

function showProp(obj){
    for(let prop in obj){
        if(obj[prop] instanceof Function){
            const f = obj[prop]
            f()
        }else{
            console.log(prop + " = " + obj[prop])
        }   
    }
}

showProp(std1)
