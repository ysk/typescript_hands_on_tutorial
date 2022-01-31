//ユーティリティ型・総称型

type data = [string, number]
type ReqData = Readonly<data>

const x:data = ['taro', 39]
const y:ReqData = ['hanako',40]

x[1] = 28
y[1] = 32

console.log(x)
console.log(y)
