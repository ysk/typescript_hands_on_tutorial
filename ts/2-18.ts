let data:any = [10,20,30,40,50]

console.log(data)
for(let i=0; i<5; i++){
    data.pop()
    data.unshift('☆')
    console.log(data)
}