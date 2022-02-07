function action(dt:number) {
    return new Promise(resolve=>{
      setTimeout(()=>{
        console.log('fished promise!')
        resolve("delay:" + dt)
      }, dt)
    })
  }

async function doit() {
    let re1 = await action(2000)
    console.log(re1)
    let re2 = await action(1000)
    console.log(re2)
    let re3 = await action(500)
    console.log(re3)
  }
  
  doit()
  
