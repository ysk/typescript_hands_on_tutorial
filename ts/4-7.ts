// オブジェクトの分割代入

namespace myapp{

    type person = {
        name:{
            first:string,
            second:string
        },
        age :number
    }

    const obj1:person = {
        name:{
            first:'taro',
            second:'hogehog'
        },
        age :39
    }

    const {name:{first,second},age} = obj1

    console.log(first + '-' + second + '::' + age)

}




