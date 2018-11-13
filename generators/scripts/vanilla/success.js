const kleur = require('kleur')

const success = () => {
  console.log(
    kleur.yellow(
    `


    Setup complete.

    →  To start the dev build in watch mode: ${kleur.bold.yellow('npm start')}
    →  To build for production: ${kleur.bold.yellow('npm run build')}

    For more information, please head to http://docs.mmt.digital

    Enjoy!


    `
    )
  )
}

module.exports = success
