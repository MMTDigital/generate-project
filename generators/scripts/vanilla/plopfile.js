const { resolve, join } = require('path')

module.exports = (plop) => {
  const input = resolve(__dirname, '../../', 'tmp')
  const output = resolve(process.cwd())

  plop.setGenerator('generate', {
    description: 'Vanilla JavaScript project',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the project? E.g.: FRC Marketing Website or VOXI Sales Journey'
      },
      {
        type: 'confirm',
        name: 'confirmDir',
        default: false,
        message: 'I am going to create your project files in the current directory. Is this okay?'
      }
    ],
    actions: [
      {
        type: 'addMany',
        templateFiles: `${input}/**/*`,
        globOptions: { dot: true },
        base: input,
        destination: output
      }
    ]
  })
}
