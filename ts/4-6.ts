// オブジェクトの分割代入

type person1 = {
    name:{
        first:string,
        second:string
    },
    age :number
}

const ob1:person1 = {
    name:{
        first:'taro',
        second:'yamada'
    },
    age: 39
}
const first = ob1.name.first
const second = ob1.name.second
const age = ob1.age

console.log(first + '-' + second + '::' + age)
