const { User } = require('../models')
const resolvers = {
    Query: {
        Users: async () => {
            return await User.find({})
        },
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId })
        }
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password })
            return user
        },
        addResponse: async (parent, { userId, response }) => {
            const newResp = await User.findByIdAndUpdate(
                { _id: userId },
                { $addToSet: { responses: { answers: { response } } } },
                { new: true }
            )
            return newResp
        },
        deleteResponse: async (parent, { userId, responseId }) => {
            return User.findByIdAndUpdate(
                { _id: userId },
                { $pull: { responses: { _id: responseId } } },
                { new: true }
            )
        }
    }
}

module.exports = resolvers