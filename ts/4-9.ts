//クラス

class Pesson{
    name:string = 'no-name'
    mail?: string
    age?: number
    print():void{
        const ml:string = this.mail ? this.mail : 'no-name'
        const ag:number = this.age ? this.age : -1
        console.log(this.name + '(' + ml + ',' + ag + ')')
    }
}

const taro = new Pesson()
taro.name = 'taro'
taro.mail = 'taro@taro.com'
taro.age = 39

taro.print()
