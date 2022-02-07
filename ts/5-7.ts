type prop_name = 'name' | 'mail' | 'age'
type Person = Record<prop_name, string|number>

const taro:Person = {
    name: 'taro',
    mail: 'taro@yamada',
    age: 39
}

console.log(taro)
