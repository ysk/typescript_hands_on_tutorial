// マップ型

namespace TypeMap {

    type stringArray = {
        [key in string]:string
    }
    
    const data1:stringArray = {
        'start' : '最初の値',
        'middle': '中央の値',
        'end'   : '最後の値'
    }

    data1['finish'] = '**おしまい**'
    data1[100] = 'ok'
    console.log(data1)

}


