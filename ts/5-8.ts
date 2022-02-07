
namespace Pick{

    type person_data = {
        name: string,
        mail: string,
        address: string,
        age: number
    }
    
    type person_keys = 'name' | 'age'
    type human_keys  = 'name' | 'mail' | 'address'
    type person = Pick<person_data, person_keys>
    type human  = Pick<person_data, human_keys>
    
    const taro:person = {
        name: 'taro',
        age:  39
    }

    const hana:human = {
        name: 'hanako',
        mail: 'hanako@hanako.com',
        address: 'chiba'
    }

    console.log(taro)
    console.log(hana)

}
