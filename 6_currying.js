import _ from 'lodash'

let dragon = (name, size, element) =>
  `${name} is a ${size} dragon that breathes ${element}`

console.log(dragon('Fluffy', 'tiny', 'thunder')) // Fluffy is a tiny dragon that breathes thunder

// Curried version
const curriedDragon = (name) => {
  return (size) => {
    return (element) => {
      return `${name} is a ${size} dragon that breathes ${element}`
    }
  }
}
console.log(curriedDragon('Fluffy')('tiny')('thunder')) // Fluffy is a tiny dragon that breathes thunder

// Functions can be curried using libraries like lodash
dragon = _.curry(dragon)
const fluffyDragon = dragon('Fluffy') // a function which takes 'size'
const tinyFluffyDragon = fluffyDragon('tiny') // a function which takes "element"
console.log(tinyFluffyDragon('thunder')) // Fluffy is a tiny dragon that breathes thunder

// Another use case
const dragons = [
  { name: 'Fluffy', element: 'thunder' },
  { name: 'Noomi', element: 'thunder' },
  { name: 'Karo', element: 'ice' },
  { name: 'Doomer', element: 'sand' },
]

let hasElement = (element, dragon) => dragon.element === element
let thunderDragons = dragons.filter((dragon) => hasElement('thunder', dragon))
console.log(thunderDragons)

// can be done in a better way using currying
hasElement = _.curry(hasElement)
thunderDragons = dragons.filter(hasElement('thunder')) // hasElement("thunder") is a function that takes 'dragon' and returns true or false => perfect for filter
console.log(thunderDragons) // same output as before
