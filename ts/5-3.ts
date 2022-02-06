namespace TypeUnion{

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

    const taro:People  = new Student('taro', 'high school', 3)
    const hana:People  = new Employee('hanako', 'president', 'sales')
    const sachi:People = new Student('sachko', 'jinir-high school', 1)
    const jiro:People  = new Employee('jiro', 'director', 'labo')

    const data:People[] = [taro, hana, sachi, jiro]
    for(let item of data){
        item.print()
    }
}

