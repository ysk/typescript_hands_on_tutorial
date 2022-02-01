//タプル型を用いて複数の値を返す

function calcTax(price:number):[price:number, tax:number]{
    const p = price / 1.1
    const t = price - p
    return [p, t]
}

function printTax(price:number):void{
    const [pr, tx] = calcTax(price)
    console.log(price + 'の本体価格' + pr + '税額' + tx)
}

printTax(2750)
printTax(3080)

