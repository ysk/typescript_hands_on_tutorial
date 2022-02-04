type person = {name:string, age:number}
function setData(ob:person, n:string, a:number):person{
    ob.name = n
    ob.age  = a
    return ob
}
const ob1:person = {name:'taro', age:30}
const ob2:person = setData(ob1, 'hanako', 20)

//ob1、ob2両方とも同じ値が出力される
console.log(ob1)
console.log(ob2)

