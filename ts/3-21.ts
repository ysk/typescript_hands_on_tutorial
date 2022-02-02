//クロージャー

const f = (n:number):()=>number=> {
    let count:number = 0
    return ():number => {
        count += n
        return count
    }
}

const f1 = f(1)
const f2 = f(2)
const f3 = f(3)

for(let i=0; i<10; i++) {
    console.log(f1() + '\t' + f2() + '\t' + f3())
}