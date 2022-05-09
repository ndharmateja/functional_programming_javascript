const animals = [
  { name: 'Fluff', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' },
]

// filter - higher order function
// because it takes functions as a parameter
const isDog = (animal) => animal.species === 'dog'

const dogs = animals.filter(isDog)
const others = animals.reject((animal) => !isDog(animal))

console.log(dogs)
console.log(others)
