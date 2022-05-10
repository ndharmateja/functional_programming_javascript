import fs from 'fs'

const output = fs
  .readFileSync('./data.txt', 'utf-8')
  .trim()
  .split('\n')
  .map((line) => line.split(','))
  .reduce((customers, line) => {
    const [name, item, price, quantity] = line
    if (!(name in customers)) {
      customers[name] = []
    }
    customers[name].push({
      name: item,
      price,
      quantity,
    })
    return customers
  }, {})

console.log('output', JSON.stringify(output, null, 2))
