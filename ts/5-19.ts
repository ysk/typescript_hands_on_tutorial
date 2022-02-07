async function getData(url:string){
  const response = await fetch(url)
  const result = await response.json()
  for(let item of result){
    console.log(JSON.stringify(item))
  }
}

const url = 'https://tuyano-dummy-data.firebaseio.com/sample_data.json'
getData(url)