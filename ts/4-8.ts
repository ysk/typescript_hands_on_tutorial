// オブジェクトの分割代入

namespace myapp2{

    type person = {
        readonly name : string,
        mail? : string,
        age?  : number,
        print : ()=>void
    }

    const ob1:person = {
        name  :'taro',
        age   :39,
        print :function():void{
            console.log(this.name + ':' + this.age)
        }
    }

    const ob2:person = {
        name:'hanako',
        mail:'hanako:hanako.com',
        print:function():void{
            console.log(this.name + ':' + this.mail)
        }
    }

    ob1.print()
    ob2.print()

}




