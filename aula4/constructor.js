function Student(name, number){
    console.log(this)
    this.name = name
    this.number = number
    console.log(this)
}

const std1 = new Student("Filipe", 1234)
const std2 = new Student("Joao", 4321)

//std1.m1 = function() {console.log("M1")}
Student.prototype.m1 = function() {console.log("M1")}

std1.m1()
std2.m1()

Object.prototype.m2 = function() {console.log("M2")}


"M1".m2()
std1.m2()

String.prototype.surround = function(left, right) {return left + this + right}

const s = "STR" 
console.log(s.surround("[","]"))

/*




std.m1()

Object.prototype.m2 = function() {console.log("M2")}

"M1".m2()

String.prototype.surround = function(left, right) {return left + this + right}

const s = "STR" 
console.log(s.surround("[","]"))


*/
