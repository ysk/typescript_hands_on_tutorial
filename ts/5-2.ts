enum human {name='name', mail='mail'}

type HumanMap = {
    [key in human]:string
}

const taro:HumanMap = {
    name: 'taro',
    mail: 'taro@yamada'
}

console.log(taro)
const hana:HumanMap = {
    name: 'hanako',
    mail: 'hanako@hanako.com'
}

console.log(hana)

