function f1(){
    console.log("Hello World")
}

f1()

function f2(){
    return "Hello World"
}

console.log(f2())

const f3 = function() {return "Hello World"} 

f3()

console.log(f2.name)

f2.p1="STR"

console.log(f2.p1)

f2.m1 = function() {return "m1 in Function f2"}

console.log(f2.m1())

console.log(typeof(f2))
console.log(f2 instanceof Function)

function f4(p1,p2,p3,p4){
    console.log("Start f4")
    console.log("p1 = " + p1)
    console.log("p2 = " + p2)
    console.log("p3 = " + p3)
    console.log("p4 = " + p4)
}

f4()
f4(1)
f4(1,2)
f4(1,2,3)
f4(1,2,3,4)
f4(1,2,3,4,5)

function f5(p1, ...rest){
    console.log("Start f5")
    console.log("p1 = " + p1)
    console.log("rest = " + rest)
    console.log("rest[0] = " + rest[0])
    console.log("rest[1] = " + rest[1])

}

f5()
f5(1)
f5(1,2)
f5(1,2,3)

function executeAndPrint(a,b,operation){
    const res = operation(a,b)
    console.log(res)
}

executeAndPrint(2,3, function(a,b){return a + b})
executeAndPrint(2,3, function(a,b){return a - b})

executeAndPrint(2,3, (c,d) => c + d)
executeAndPrint(2,3, (a,b) => a - b)

