const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 325 },
  { amount: 100 },
]

const totalSum = orders.reduce((sum, order) => sum + order.amount, 0)
console.log(totalSum)
