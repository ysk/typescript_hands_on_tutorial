//戻り値に関数を用いる

const f = (tax:number):(n:number)=>number=>{
    return (n:number)=>n*(1+tax)
}

const f1 = f(0.1)
