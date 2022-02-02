//ジェネレーター

function* fibo(n:number){
    let n1 = 0
    let n2 = 1

    for(let i=0; i<=n; i++) {
        yield n1
        let n3 = n1 + n2
        n1 = n2
        n2 = n3
    }
}

const n = 10
let fb = fibo(n)
for (let i=0; i<=n+3; i++) {
    let ob = fb.next()
    console.log(ob.value)
}
