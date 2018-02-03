const sections = ['background', 'static'].map(name => require('./' + name))

module.exports = function (app, models) {
  sections.forEach(section => section(app, models))
}
