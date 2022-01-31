// enum

enum janken {
    goo,
    choki,
    paa
}

const you:janken =janken.goo

switch(you){
    case janken.goo:
    console.log('あいこです。')
    break

    case janken.choki:
    console.log('あなたの勝ち')
    break

    case janken.paa:
    console.log('あなたの負け')
    break
}