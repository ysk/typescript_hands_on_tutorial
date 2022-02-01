//Symbol

const a1:string = "ok"
const b1:String = "ok"

console.log(a1==b1)
console.log(a1===b1)

const a2:unique symbol = Symbol("ok")
const b2:unique symbol = Symbol("ok")

console.log(a2==b2)
console.log(a2===b2)

