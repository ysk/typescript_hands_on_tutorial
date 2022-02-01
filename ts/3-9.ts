//可変長引数

const f = (...data:number[]):number => {
    let total = 0
    for (let i of data){
        total += i
    }
    return total
}

console.log(f(1,2,3,4,5))
console.log(1,2,3,4,5,6,7,8,9)
console.log(123,456,789)


