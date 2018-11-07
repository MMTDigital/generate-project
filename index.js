#!/usr/bin/env node

const inquirer = require('inquirer')
const kleur = require('kleur')
const notify = require('./notify')
const constants = require('./constants')
const generateVanilla = require('./generators/vanilla')
const { vanilla } = constants

const processAnswers = ({ chosenTodo }) => {
  const actions = {
    [vanilla]: generateVanilla
  }

  actions[chosenTodo]()
}

const askQuestions = () => {
  inquirer.prompt([{
    type: 'list',
    name: 'chosenTodo',
    message: 'What would you like to do today?',
    choices: [
      {
        name: 'Generate a vanilla front-end boilerplate (webpack, folders + files, ES6+)',
        value: vanilla
      }
    ]
    }
  ])
  .then(processAnswers)
}

const start = () => {
  notify()
  console.info(`\n ${kleur.bold.white.bgBlue(' ' + 'Welcome to the MMT Digital command line tool' + ' ')} \n`)
  askQuestions()
}

start()
