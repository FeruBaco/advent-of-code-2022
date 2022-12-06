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


const selectShape = (tent, elfShape) => {
  if(elfShape === 'A'){
    if(tent === 'X') return 'Z'
    if(tent === 'Y') return 'X'
    if(tent === 'Z') return 'Y'
  }
  if(elfShape === 'B'){
    if(tent === 'X') return 'X'
    if(tent === 'Y') return 'Y'
    if(tent === 'Z') return 'Z'
  }
  if(elfShape === 'C'){
    if(tent === 'X') return 'Y'
    if(tent === 'Y') return 'Z'
    if(tent === 'Z') return 'X'
  }
}

for (const round of rounds) {
  const shapes = round.split(' ')

  const elfShape = shapes[0]
  const myTent = shapes[1]

  const goodShape = selectShape(myTent, elfShape)


  const elfShapePoints = shapePoints[elfShape]
  const myShapePoints = shapePoints[goodShape]

  totalScore += shapePoints[goodShape]
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