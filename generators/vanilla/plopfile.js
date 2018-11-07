const { resolve } = require('path')

module.exports = function (plop) {
  const cwd = `${process.cwd()}/aa/`
  const src = resolve(cwd, 'src')

  const templates = './templates'
  const srcFiles = `${templates}/src`

  const sharedTemplates = '../shared/templates'
  const rootSharedTemplateFiles = `${sharedTemplates}/root`
  const rootSharedSrcFiles = `${sharedTemplates}/src`

  plop.setGenerator('generate', {
    description: 'Vanilla JavaScript project',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is the name of the project? E.g.: FRC Marketing Website or VOXI Sales Journey'
    }],
    actions: [
      {
        type: 'addMany',
        templateFiles: `${rootSharedTemplateFiles}/**/*`,
        globOptions: { dot: true },
        base: rootSharedTemplateFiles,
        destination: cwd
      },
      {
        type: 'addMany',
        templateFiles: `${rootSharedSrcFiles}/**/*`,
        globOptions: { dot: true },
        base: rootSharedSrcFiles,
        destination: src
      },
      {
        type: 'addMany',
        templateFiles: `${srcFiles}/**/*`,
        globOptions: { dot: true },
        base: srcFiles,
        destination: src
      }
    ]
  })
}
