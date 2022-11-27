const asyncAdd = async (a,b, ...args) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return Promise.reject('Argumenty muszą mieć typ number!')
    }
    for (const arg of args) {
        if(typeof arg !== 'number') {
            return Promise.reject('Argumenty muszą mieć typ number!')
        }
    }
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(a+b)
      }, 100)
    })
  }