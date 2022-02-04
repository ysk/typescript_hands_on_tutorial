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

        private grade_num:number = -1
        get gradeN():number {
            return this.grade_num
        }
        set gradeN(n:number) {
            this.grade_num = n
            this.grade = String(n)
        }

        private gr_str:string = ''
        get grade():string {
            return this.gr_str
        }
        private set grade(pr:string){
            let gd = pr
            switch(this.gradeN){
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
            this.gr_str = gd
        }

        constructor(name:string, school:School, grade:number){
            super(name)
            this.school = school
            this.gradeN  = grade
        }

        print(): void {
            let gd:string = this.grade ? String(this.grade) : '-'
            console.log(this.name + '(' + this.school + ' school: ' + gd + 'grade)')
        }
    }

    const taro = new Person('taro', 'taro@taro.com', 34)
    const hanako = new Student('hanako', School.high, 2)

    taro.print()
    hanako.print()

}
