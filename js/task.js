'use strict'
function numGen() {
    let number = []
    const  gen = () => {
        let i = Math.floor(Math.random() * 11); //сменить число с 11 на 101
        number.includes(i) ? gen() : (number.push(i))
        return number
    }
    return gen
}
let arrNumber = numGen();
console.log(arrNumber())
console.log(arrNumber())
console.log(arrNumber())
console.log(arrNumber())
console.log(arrNumber())
console.log(arrNumber())
console.log(arrNumber())
console.log(arrNumber())
console.log(arrNumber())
console.log(arrNumber())

// сделал на примере 10 , для показания работоспособности








