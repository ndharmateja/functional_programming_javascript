let me = 'Dharma'

// In JS all functions are closures
// The function below has access to 'me'
const greet = () => console.log(`Hello ${me}`)
greet() // Hello Dharma

// Even after reassignment
me = 'Batman'
greet() // Hello Batman
