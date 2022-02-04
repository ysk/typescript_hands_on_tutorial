//クラス
namespace sampleApp {

    class Person{
        name  : string = 'no-name'
        mail? : string
        age?  : number

        //コンストラクタ
        constructor(name:string, mail:string='no-mail', age:number=-1){
            this.name = name
            this.mail = mail
            this.age  = age
        }
        print():void{
            console.log(this.name + '(' + this.mail + ',' + this.age + ')')
        }
    }

    enum School {
        junior     = 'junior',
        juniorHigh = 'juniorHigh',
        high       = 'high',
        other      = 'other',
    }

    class Student extends Person {
        school?: School
        grade?: number

        constructor(name:string, school:School, grade:number){
            super(name)
            this.school = school
            this.grade  = grade
            switch(school){
                case School.junior:
                    this.age = 6 + this.grade
                    break
                case School.juniorHigh:
                    this.age = 12 + this.grade
                    break
                case School.high:
                    this.age = 15 + this.grade
                    break
                default:
                    this.age = -1
            }
        }
        //メソッドのオーバライド
        print():void{
            let gd:string = this.grade ? String(this.grade) : '-'
            switch(this.grade){
                case 1:
                    gd += 'st'
                    break
                case 2:
                    gd += 'nd'
                    break
                case 3:
                    gd += 'rd'
                    break
                default:
                    gd += 'th'
            }
        }
    }

    const taro = new Person('taro', 'taro@taro.com', 34)
    const hanako = new Student('hanako', School.high, 2)

    taro.print()
    hanako.print()

}
