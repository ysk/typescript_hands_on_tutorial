const f = (arr?:any[]):void => {
    let res = 'Array: '
    for(let i of arr) {
        res += String(i) + '\t'
    }
    console.log(res)
}

f(['ok', 'NG'])
f([10,20,30])
f()