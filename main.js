// import getType from './getType'
import random from './getRandom'

function isEqual(x, y) {
    return x == y
}

function isEqual2(x, y) {
    return x === y
}

console.log(isEqual(1, 1))      //true
console.log(isEqual2(1, 1))     //true
console.log(isEqual(2, '2'))    //true
console.log(isEqual2(2, '2'))   //false

// 삼항 연산자
const a = 1 < 2 //true

if(a) {
    console.log('참')
}else{
    console.log('거짓')
}

console.log(a ? '참' : '거짓')
console.log('============================================')

const b = random()
console.log(b === 0 ? 'b is 0' : 'not 0')

console.log('============================================')

const c = random()
switch(c) {
    case 2: case 4: case 6: case 8:
        console.log('c is even')    
        break
    case 1: case 3: case 5: case 7: case 9:
        console.log('c is odd')
        break
    default:
        console.log('c is 0')
}

console.log('============================================')

for(let i = 1; i < 5; i+=1) {
    console.log(i)
}

console.log('============================================')

const ulEl = document.querySelector('ul')

for(let i = 0; i < 3; i++) {
    const li = document.createElement('li')
    li.textContent = `list-${i+1}`
    ulEl.appendChild(li)
}