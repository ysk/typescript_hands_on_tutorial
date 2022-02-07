// ユニオン型を個別に処理

namespace TypeUnion2{

    class Student {
        name: string
        school: string
        grade: number
        constructor(nm:string, sc:string, gr:number){
            this.name  = nm
            this.school = sc
            this.grade  = gr
        }
        print():void {
            console.log('<<' + this.name + this.school + '::' + this.grade + '>>')
        }
    }

    class Employee {
        name: string
        title: string
        departmeng: string
        constructor(nm:string, tt:string, dp:string){
            this.name       = nm
            this.title      = tt
            this.departmeng = dp
        }
        print():void {
            console.log(this.name + '[' + this.title + ',' + this.departmeng + ']')
        }
    }

    type People = Student | Employee

    class Human {
        data:People[] = []

        add(item:People):void {
            this.data.push(item)
        }

        print():void{
            for(let item of this.data){
                let ob
                switch (item.constructor.name) {
                    case 'Student':
                        ob = item as Student
                        console.log(ob.name + ',' + ob.school + '（' + ob.grade + '）')
                        break;
                    case 'Employee':
                        ob = item as Employee
                        console.log(ob.name + ',' + ob.title + '（' + ob.departmeng + '）')
                    default:
                        console.log('cannot print.')
                        break;
                }
            }
        }
    }

    const taro:People = new Student('taro', 'high school', 3)
    const hana:People = new Employee('hanako', 'president', 'salse')
    const sachi:People = new Student('sachiko', 'jinir-high school', 1)
    const jiro:People  = new Employee('jiro', 'director', 'labo')

    const human = new Human()
    human.add(taro)
    human.add(hana)
    human.add(sachi)
    human.add(jiro)

    human.print()

}

