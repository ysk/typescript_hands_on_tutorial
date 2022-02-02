//数値とテキストの関数を引数にする

const func =(n:number, f:(n:number)=>number|string):void => {
    let res = f(n)
    console.log('Result: ' + res)
}

const double = (n:number):number => n*2
const word = (n:number):string => {
    const w = ['０','一','二','三','四','五','六','七','八','九']
    const s = String(n)
    let res:string[] = []
    for(let i=0; s.length; i++){
        let c = s.charAt(i)
        res.push(w[Number(c)])
    }
    return res.join('')
}

const num = 1230
func(num, double)
func(num, word)
