require('dotenv').config()

const http = require('http')
const app = require('app')
const { normalizePort, logger } = require('utils')

const port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

const server = http.createServer(app)

server.listen(port)

server.on('error', (error) => {
  logger.error({ stack: error }, error.message)
  throw error
})

server.on('listening', () => {
  const address = server.address()
  const bind = typeof addr === 'string' ? 'pipe ' + address : 'port ' + address.port

  logger.debug('Listening on ' + bind)
})
