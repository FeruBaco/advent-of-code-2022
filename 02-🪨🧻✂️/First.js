const fs = require('fs')
const data = fs.readFileSync('./input.txt', 'utf-8')
const rounds = data.split('\n')

let totalScore = 0
const shapePoints = {
  'A': 1,
  'B': 2,
  'C': 3,
  'X': 1,
  'Y': 2,
  'Z': 3,
}
const matchPoints = {
  'L': 0,
  'W': 6,
  'D': 3,
}

for (const round of rounds) {
  const shapes = round.split(' ')
  const elfShape = shapes[0]
  const myShape = shapes[1]

  const elfShapePoints = shapePoints[elfShape]
  const myShapePoints = shapePoints[myShape]

  totalScore += shapePoints[myShape]
  // Draw
  if(elfShapePoints === myShapePoints) {
    totalScore += matchPoints['D']
  }

  // Elf Rock - Scissor = L
  if(elfShapePoints === 1 && myShapePoints === 3) {
    totalScore += matchPoints['L']
  }
  // Elf Rock - Paper = W
  if(elfShapePoints === 1 && myShapePoints === 2) {
    totalScore += matchPoints['W']
  }

  // Elf Paper - Rock = L
  if(elfShapePoints === 2 && myShapePoints === 1) {
    totalScore += matchPoints['L']
  }
  // Elf Paper - Scissor = W
  if(elfShapePoints === 2 && myShapePoints === 3) {
    totalScore += matchPoints['W']
  }

  // Elf Scissor - Rock = W
  if(elfShapePoints === 3 && myShapePoints === 1) {
    totalScore += matchPoints['W']
  }
  // Elf Scissor - Paper = L
  if(elfShapePoints === 3 && myShapePoints === 2) {
    totalScore += matchPoints['L']
  }
  
}

console.log(totalScore)