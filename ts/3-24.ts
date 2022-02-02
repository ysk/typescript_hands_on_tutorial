const f = (n:number):[number] => {
    if(n<0) {
        throw Error('負の値です。')
    }
    let total = 0
    for (let i=1; i<=n; i++) {
        total += i
    }
    return [total]
}

try {
    let res1 = f(100)
    console.log(res1)

    let res2 = f(-100)
    console.log(res2)
} catch(e){
    console.log(e.message)
}


