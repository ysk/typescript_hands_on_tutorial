//クラス
namespace sampleApp {

    class Person{
        name  : string = 'no-name'
        mail? : string
        age?  : number
    
        //コンスタント
        constructor(name:string, mail:string='no-mail', age:number=-1){
            this.name = name
            this.mail = mail
            this.age  = age
        }
        print():void{
            console.log(this.name + '(' + this.mail + ',' + this.age + ')')
        }
    }
    
    //インスタンス生成
    const taro = new Person('taro', 'taro@taro.com', 39)
    const hanako = new Person('hanako', 'hanako@hanako.com', 39)
    
    taro.print()
    hanako.print()
   
}
