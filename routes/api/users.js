const router = require('express').Router()
const Users = require('controllers/Users')

router.get('/:id', Users.get)
router.get('/', Users.find)
router.post('/', Users.create)
router.put('/:id', Users.update)
router.delete('/:id', Users.delete)

module.exports = router
