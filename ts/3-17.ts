const func =(n:number, f:Function):void{
    let res = f(n)
    console.log("Result: " + res)
}

const double = (n:number) => n*2
const total = (n:number) => {
    let total = 0
    for(let i=1; i<=n; i++){
        total += i
    }
    return total
}

const num = 100
func(num, double)
func(num, total)
