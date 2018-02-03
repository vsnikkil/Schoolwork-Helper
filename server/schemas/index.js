const schemas = ['user', 'session']

const output = {}
schemas.forEach(filename => {
  output[filename] = require('./' + filename)
})

module.exports = output
