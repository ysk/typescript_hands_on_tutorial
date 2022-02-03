//ファクトリ関数

function Person(n:number, a:number):
    {name:string, age:number, print:()=>void} {
    return {
        name:n,
        age :a,
        print: function() {
            console.log(this.name + '(' + this.age + ')')
        }
    }
}

const taro = Person('taro', 39)
const hana = Person('hanako', 28)
taro.print()
hana.print()
