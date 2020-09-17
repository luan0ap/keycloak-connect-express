const pino = require('pino')

// 'fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent'.
const logger = pino({
  name: 'keycloak-connect-express',
  level: 'debug',
  messageKey: 'message',
  formatters: {
    level (label) {
      return { level: label }
    }
  },
  timestamp: () => `,"timestamp":"${new Date().toISOString()}"`
})

/**
 * Adjust port number to Number format
 * @param {String|Number} val - Port number
 */
function normalizePort (val) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

module.exports = {
  logger,
  normalizePort
}
