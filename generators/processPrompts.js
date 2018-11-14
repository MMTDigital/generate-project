const processPrompts = (prompts) => {
  return new Promise((resolve, reject) => {
    reject(`Your prompts tell us that you're not quite ready to create files yet. Nothing was created`)
    if (!prompts.confirmDir) reject()
  })
  resolve()
}

module.exports = processPrompts
