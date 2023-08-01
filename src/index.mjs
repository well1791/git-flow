const add = (a) => (b) => a + b

function main(a = 1, b = 2) {
  const result = add(add(a)(b))(10)
  return result
}

export default main
