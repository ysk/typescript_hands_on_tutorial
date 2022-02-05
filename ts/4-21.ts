
//静的メンバーによるstatic
class StaticHuman {
    static fullname: string
    static age: number
    static set(nm:string, ag:number):void{
        this.fullname = nm
        this.age = ag
    }
    static print():void{
        console.log(this.fullname + '(' + this.age + ')')
    }
}

StaticHuman.set('taro', 39)
StaticHuman.print()
StaticHuman.set('hanako', 28)
StaticHuman.print()
