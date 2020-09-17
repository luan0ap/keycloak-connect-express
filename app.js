;(() => {
  // external libs
  const app = require('express')()
  const cors = require('cors')
  const helmet = require('helmet')
  const bodyParser = require('body-parser')
  const session = require('express-session')

  // routes
  const indexRouter = require('routes/index')

  // utils
  const { logger } = require('utils')

  // services
  const { keycloak, store } = require('services/Keycloak')

  // errors classes
  const { HttpError } = require('http-errors')

  app.use(session({
    store,
    secret: 'keycloak-connect-express', // TODO Change for a better secret
    resave: false,
    saveUninitialized: true
  }))

  app.use(bodyParser.json())
  app.use(helmet())
  app.use(keycloak.middleware())

  app.use(indexRouter)

  app.use(cors)
  app.options('*', cors())

  app.use(function (error, req, res, next) {
    if (error instanceof HttpError) {
      logger.error(error)

      return res.status(error.status).send(error.message)
    }

    return next(error)
  })

  app.use(function (error, req, res, next) {
    logger.fatal(error, 'Healt NOK')

    return res.status(500).send('Internal server error')
  })

  module.exports = app
})()
