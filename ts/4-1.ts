//オブジェクト

const Person = {
    name: "taro",
    age: 39,
    print: function():void{
        console.log(this.name + '(' + this.age + ')')
    }
}

Person.print()
Person.name = 'hanako'
Person.age = 79
Person.print()
