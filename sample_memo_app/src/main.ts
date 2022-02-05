let table:HTMLTableElement
let message:HTMLInputElement

function showTable(html:string):void{
    table.innerHTML = html
}

function doAction():void{
    const msg:string = message.value
    memo.add({message:msg, date:new Date()})
    memo.save()
    memo.load()

}

function doInitial():void{

}

type Memo = {
    message:string
    date:Date
}

class MemoData {

}

window.addEventListener('load', ()=>{
    
})