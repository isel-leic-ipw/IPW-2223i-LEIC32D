function f1(){

    console.log("Start F1")

    function f2(x){
        console.log("F2 - x - " + x)
    }

    console.log("End F1")
    return f2
}

const f3 = f1()
f3(1)
f3(2)

function multiplier(m){
    return function(i){return i * m}
}

const m10 = multiplier(10)
const m20 = multiplier(20)

console.log(m10(1))
console.log(m20(2))











