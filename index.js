const server = require('./server.js')

const PORT = process.env.PORT || 6969

server.listen(PORT, () => {
  console.log(`♪♪♪..Reporting For Duty On Port ${PORT}..♪♪♪`)
});