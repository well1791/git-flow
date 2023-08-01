const add = (a) => (b) => (c) => a + b + c

function main(a = 1, b = 2) {
  const result = add(add(a)(b)(0))(10)(0)
  return result
}

export default main
