// model
const User = require('models/User')

// errors classes
const { ValidationError } = require('sequelize') // see more: https://sequelize.org/master/identifiers.html#errors
const { BadRequest } = require('http-errors') // see more: https://www.npmjs.com/package/http-errors

module.exports = {
  async create (req, res, next) {
    try {
      const user = await User.create(req.body)

      return user
    } catch (error) {
      if (error instanceof ValidationError) {
        return next(BadRequest(error.message))
      }

      return next(error)
    }
  },

  async update (req, res, next) {},

  async delete (req, res, next) {},

  async get (req, res, next) {},

  async find (req, res, next) {}
}
