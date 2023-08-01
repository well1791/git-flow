import main from './src/index.mjs'

((...args) => {
  const result = main(...args);
  console.log(result)
})(3, 4, 5)
