const fs = require('fs')

const data = fs.readFileSync('./input.txt', 'utf-8')

let highestCaloriesMeal = 0
let actualMeal = 0
const dataSplitted = data.split('\n')
dataSplitted.forEach((el) => {
  let actualCalories = 0

  if(el.length !== 0 ) {
    actualCalories = Number(el)
  } else {
    if(actualMeal > highestCaloriesMeal) {
      highestCaloriesMeal = actualMeal
    }
    actualMeal = 0
  }

  actualMeal += actualCalories
})

console.log(highestCaloriesMeal)