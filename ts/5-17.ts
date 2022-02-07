function getData(url:string) {
    fetch(url).then(res=>res.json()).then(re=> {
        for (let item of re) {
          console.log(item)
        }
    })
}

const url = 'https://tuyano-dummy-data.firebaseio.com/sample_data.json'
getData(url)