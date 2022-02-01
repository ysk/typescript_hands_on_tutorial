function printPerson(id:number|string, name:string, age:number):void{
    switch(typeof(id)){
        case 'string':
            console.log('your id is ' + id + '.')
            break
        case 'number':
            console.log('No,' + id)
            break
        default:
            console.log('wrong id...')
    }
}

printPerson(10, 'taro', 39)
printPerson('flower', 'hanako', 28)

