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

const GetSum = async(...args) => {
    let asyncOperations = 0
    const allPromises = []
    let sum = 0
    for (const arg of args) {
        allPromises.push(asyncAdd(sum, arg).then((result) => sum += result))
        asyncOperations = asyncOperations + 1
    }
    await Promise.allSettled(allPromises)
    console.log(`Sum: ${sum}`)
    console.log(`Number of operations: ${asyncOperations}`)
}

const getPerformanceTime = async () => {
    const t0 = performance.now()
    await GetSum(15, 22, 40, 3, 8, 21, 5, 13, 6, 9, 15, 22, 40, 3, 8, 21, 5, 13, 6, 9, 15, 22, 40, 3, 8, 21, 5, 13, 6, 9, 15, 22, 40, 3, 8, 21, 5, 13, 6, 9, 
        15, 22, 40, 3, 8, 21, 5, 13, 6, 9, 15, 22, 40, 3, 8, 21, 5, 13, 6, 9, 15, 22, 40, 3, 8, 21, 5, 13, 6, 9, 15, 22, 40, 3, 8, 21, 5, 13, 6, 9, 
        15, 22, 40, 3, 8, 21, 5, 13, 6, 9, 15, 22, 40, 3, 8, 21, 5, 13, 6, 9)
    const t1 = performance.now()
    console.log(`Time: ${t1 - t0}`)
}

getPerformanceTime()