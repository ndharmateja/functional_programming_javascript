const countDownFrom = (number) => {
  if (number == 0) return
  console.log(number)
  countDownFrom(number - 1)
}

// countDownFrom(10)

const categories = [
  { id: 'animals', parent: null },
  { id: 'mammals', parent: 'animals' },
  { id: 'dogs', parent: 'mammals' },
  { id: 'cats', parent: 'mammals' },
  { id: 'terrier', parent: 'dogs' },
  { id: 'pitbull', parent: 'dogs' },
  { id: 'siamese', parent: 'cats' },
  { id: 'persian', parent: 'cats' },
]

/**
 * required output
 * {
        animals: {
            mammals: {
            dogs: {
                terrier: null,
                pitbull: null,
            },
            cats: {
                siamese: null,
                persian: null,
            },
            },
        },
    }
 *
 */
const makeTreeHelper = (categories, parent) => {
  const categoriesWithGivenParent = categories.filter(
    (c) => c.parent === parent
  )
  if (categoriesWithGivenParent.length === 0) return null

  const node = {}
  categoriesWithGivenParent.forEach(
    (c) => (node[c.id] = makeTreeHelper(categories, c.id))
  )
  return node
}

const makeTree = (categories) => makeTreeHelper(categories, null)

console.log(JSON.stringify(makeTree(categories), null, 2))
