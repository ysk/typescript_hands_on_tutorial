type name = string
type mail = string
type age  = number
type person = [name, mail, age]

const taro:person    = ['taro', 'taro@taro.com', 30]
const hanako:person  = ['hanako', 'hanako@hanako.com', 20]
const sachiko:person = ['sachiko', 'sachiko@sachiko.com', 35]

const data:person[] = [taro, hanako, sachiko]

for (let item of data){
    console.log(item)
}

