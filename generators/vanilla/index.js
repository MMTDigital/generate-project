const nodePlop = require('node-plop')
const plop = nodePlop('./plopfile.js')
const generator = plop.getGenerator('generate')

module.exports = () => (
  generator.runPrompts()
    .then(generator.runActions)
    .catch(error => console.warn('There was an error generating files', error))
)

