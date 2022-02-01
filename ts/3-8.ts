function printPerson(name?:string, age?:number):void{
    const nameval = name ? name : 'no-name'
    const ageval  = age ? String(age) : '-'
    console.log('Name:' + nameval + '(' + ageval + ')')
}

printPerson('taro', 39)
printPerson('hanako')
printPerson()

