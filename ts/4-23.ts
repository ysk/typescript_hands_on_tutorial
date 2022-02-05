//総称型（ジェネリクス）クラス
//実行時に型が決定する特殊な型指定

namespace _Data{

    class Data<T> {
        data?:T[]
    
        constructor(...item:T[]) {
            this.data = item
        }
    
        print():void {
            if(this.data) {
                for(let item of this.data) {
                    console.log(item)
                }
            } else {
                console.log('no data...')
            }
        }
    }
    
    const data1 = new Data<string>('one', 'two', 'three')
    const data2 = new Data<number>(123,456,78,90)
    data1.print()
    data2.print()
    
}
