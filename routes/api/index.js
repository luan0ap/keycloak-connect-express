
const router = require('express').Router()
const { keycloak } = require('services/Keycloak')
const AllowMethods = require('middlewares/AllowMethods')

router.use('/users', AllowMethods(['POST']), keycloak.protect(), require('./users'))

module.exports = router
