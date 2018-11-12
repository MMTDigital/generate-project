const { resolve } = require('path')
const nodePlop = require('node-plop')
const constants = require('../../../constants')
const prepareFiles = require('../../prepareFiles')
const cleanup = require('../../cleanup')
const processPrompts = require('../../processPrompts')

const plopFile = resolve(__dirname, 'plopfile.js')
const plop = nodePlop(plopFile)
const generator = plop.getGenerator('generate')

module.exports = () => (
  cleanup()
    .then(prepareFiles(constants.vanilla))
    .then(generator.runPrompts)
    .then(processPrompts)
    .then(generator.runActions)
    .then(cleanup)
    .catch(error => {
      console.warn('Error generating files!', error)
      process.exit(1)
    })
)
