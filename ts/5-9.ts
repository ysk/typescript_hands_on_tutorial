class MyData<T>{
    
    data:T[] = []

    constructor(...data:T[]) {
        this.data = data
    }

    add(val:T) {
        this.data.push(val)
    }

    [Symbol.iterator]() {
        let pos = 0;
        let items = this.data;

        return {
            next():IteratorResult<T> {
                if(pos < items.length) {
                    return {
                        done: false,
                        value: items[pos++]
                    }
                } else {
                    return {
                        done: true,
                        value: null
                    }
                }
            }
        }
    }
}

const data = new MyData<string>('one', 'two', 'three')

for(let item of data){
    console.log(item)
}
