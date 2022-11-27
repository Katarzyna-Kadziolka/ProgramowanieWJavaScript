const asyncAdd = async (a,b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return Promise.reject('Argumenty muszą mieć typ number!')
    }
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(a+b)
      }, 100)
    })
}

const GetSum = async(a, b, ...args) => {
    let sum = await asyncAdd(a, b)
    for (const arg of args) {
        sum = await asyncAdd(sum, arg)
    }
    console.log(sum)
}

GetSum(10, 20, 1, 55, 68, 79)