const numbers = [1,2,3,4]

console.log(numbers.filter(e => e % 2))

console.log(numbers.map(e => e * 2))

console.log(filter(numbers, e => e % 2))

console.log(map(numbers, e => e * 2))

function filterIPW(array, predicate){
    const newArray = []
    for(let e of array){
        if(predicate(e)) newArray.push(e)
    }
    return newArray
}

function mapIPW(array, transform){
    const newArray = []
    for(let e of array){
        newArray.push(transform(e))
    }
    return newArray
}

//TPC fazer reduce