//オブジェクト

const person = Object()
person.name = 'taro'
person.age = 39
person.print = function():void{
    console.log(this.name + '(' + this.age + ')' )
}

person.print();
