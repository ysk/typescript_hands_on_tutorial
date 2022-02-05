// インターフェース
namespace sampleApp {

    enum School {
        junior     = 'junior',
        juniorHigh = 'juniorHigh',
        high       = 'high',
        other      = 'other',
    }

    interface Human {
        name:string
        print():void
    }

    class Person implements Human{
        name  : string = 'no-name'
        mail? : string
        age?  : number

        constructor(name:string, mail:string='no-mail', age:number=-1){
            this.name = name
            this.mail = mail
            this.age  = age
        }

        print():void{
            console.log(this.name + '(' + this.mail + ',' + this.age + ')')
        }
    }

    class Student implements Human {
        name    : string = 'no-name'
        school? :School
        grade?  :number

        constructor(name:string, school?:School, grade?:number){
            this.name   = name
            this.school = school
            this.grade  = grade
        }

        print(): void {
            let gd:string = this.grade ? String(this.grade) : '-'
            console.log(this.name + '(' + this.school + ' school: ' + gd + 'grade)')
        }
    }

    const taro:Person    = new Person('taro', 'taro@taro.com', 34)
    const hanako:Student = new Student('hanako', School.high, 2)
    const sachiko:Person = new Person('sachiko')
    const jiro:Student   = new Student('jiro')

    const data:Human[] = [
        taro,
        hanako,
        sachiko,
        jiro
    ]

    for(let item of data){
        item.print()
    }

    interface People extends Human {
        birth:Date
    }

    class Employee implements People {
        name:string = 'no-name'
        company:string = ''
        birth: Date = new Date()
        
        constructor(nm:string, cm:string, bth:Date){
            this.name    = nm 
            this.company = cm
            this.birth   = bth
        }

        print(): void {
            console.log(this.name + '[' + this.company + ']')
        }
    }

    const ichiro = new Employee(
        'ichiro',
        'Baseball Inc',
        new Date('1982/10/10')
    )

    ichiro.print()

}
