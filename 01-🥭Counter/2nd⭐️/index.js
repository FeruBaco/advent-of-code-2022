const fs = require('fs')

const data = fs.readFileSync('./input.txt', 'utf-8')

let highestCaloriesMeal = []
let actualMeal = 0
const dataSplitted = data.split('\n')
dataSplitted.forEach((el) => {
  let actualCalories = 0
  if(el.length !== 0 ){
    actualCalories = Number(el)
    actualMeal += actualCalories  
  }
  if(el.length === 0 ) {
    if(highestCaloriesMeal.length < 3) {
      highestCaloriesMeal.push(actualMeal)
    }
    if(highestCaloriesMeal.length === 3) {
      highestCaloriesMeal.sort((a,b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
      })

      for (let i = 0; i < highestCaloriesMeal.length; i++) {
        if(actualMeal > highestCaloriesMeal[i]) {
          highestCaloriesMeal[i] = actualMeal
          break 
        }
      }
    }
    actualMeal = 0
  }
})
const sumMeals = highestCaloriesMeal.reduce((prev, curr) => prev + curr, 0)
console.log(highestCaloriesMeal);
console.log(sumMeals)