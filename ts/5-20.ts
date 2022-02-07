async function getData(url:string, obj:object) {
  await fetch(url,{
    method: 'POST',
    mode:'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
  const response  = await fetch(url)
  const result = await response.json()
 console.log(result)
}

const url = 'https://tuyano-dummy-data.firebaseio.com/sample_message.json'

const obj = {
  title: 'Hello!',
  message:'This is sample message!'
}

getData(url, obj)
