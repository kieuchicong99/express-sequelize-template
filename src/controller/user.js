
const { User } = require("../model")

async function createUser(firstName, lastName) {

    let user
    try {
        user = await User.create({ firstName, lastName });
    } catch (error) {
        return { status: 'fail', data: null, error: error }
    }
    return { status: 'sucess', data: user, error: null }
}

async function getAllUser() {
    const users = await User.findAll();
    return users
}

async function getUserByName() {
    const users = await User.findAll({ where: { firstName: 'HELLO' } })
    return users
}

async function getUserWithTask(userId) {
    const userInfo = await User.findByPk(userId, { include: ["tasks"] });
    return userInfo
}

module.exports = { createUser, getAllUser, getUserByName, getUserWithTask }