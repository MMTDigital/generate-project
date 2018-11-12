const processPrompts = async (prompts) => {
  if (!prompts.confirmDir) process.exit(1)
  return prompts
}

module.exports = processPrompts
