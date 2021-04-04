const user = require('../orm/mongoose/schemas/user')
const userController = {}

userController.getAll = async (req, res) => {
    const users = await user.find()
    res.json(users)
}

module.exports = userController