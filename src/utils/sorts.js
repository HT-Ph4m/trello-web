export const mapOrder = (originalArray, orderArray, key) => {
  if (!originalArray || !orderArray || !key) return []
  return [...originalArray].sort(
    (a, b) => orderArray.indexOf(a[key]) - orderArray.indexOf(b[key])
  )
}

// const originalArray = [
//   { id: 1, name: 'Apple' },
//   { id: 2, name: 'Banana' },
//   { id: 3, name: 'Cherry' }
// ]

// const orderArray = [2, 3, 1]

// const mappedArray = mapOrder(originalArray, orderArray, 'id')

// console.log(mappedArray)
// Output: [
//   { id: 2, name: 'Banana' },
//   { id: 3, name: 'Cherry' },
//   { id: 1, name: 'Apple' }
// ]
