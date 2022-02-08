let table:HTMLTableElement
let message:HTMLInputElement

let nickname:HTMLInputElement
let message:HTMLInputElement
let table:HTMLTableElement

const url = 'https://sample-ts-app-default-rtdb.firebaseio.com/boards.json'

function doAction:void{
}

function doDelete:void{
}

function sendData():void{
}

function getData():void{
}

window.addEventListener('load', ()=>{
    message = document.querySelector('#message')
    nickname = document.querySelector('#nickname')
    table = document.querySelector('#table')

    const btn:HTMLButtonElement = document.querySelector('#btn')
    btn.onclick = doAction
    
    const del:HTMLButtonElement = document.querySelector('#delete')
    del.onclick = doDelete
    getData(url)
})

