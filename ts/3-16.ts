const f = (n:number) => {
    const inF = (n:number):void=>{
        console.log("value:" + n)
    }
    let total = 0
    for(let i=1; i<=n; i++){
        total+=i
        inF(total)
    }
}

f(10)
