

function f1() {
  console.log(this)
}

function Student(name, number){
    console.log(this)
    this.name = name
    this.number = number
    console.log(this)
}

// 1st way: As a global function
// this refers to the Global Object
console.log(`1st way: As a global function`)
f1()

// 2nd way: As a method
// this refers to the object with the method
console.log(`2nd way: As a method`)
const obj = {
  a : "STR",
  m: f1
}

obj.m()


// 3rd way: As a constructor
// this refers to the newly created object
console.log(`3rd way: As a constructor`)

const std = new Student("Filipe", 1234)

function f2(p1, p2){
    console.log(`p1 = ${p1} p2 = ${p2}`)
    console.log(`this =`, this)
}

// 4th way: Using methods call or apply
// this will be the first argument passed to one of this functions
console.log(`4th way: Using methods call or apply`)

f2.call(std, 1 , 2) 
f2.apply(std, [1,2])