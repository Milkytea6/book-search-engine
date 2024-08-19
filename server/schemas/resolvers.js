const { User, bookSchema } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find();
        },
        user: async (parent, { userId }) => {
            return await User.findOne({ _id: userId })
        }
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            return await User.create({ username, email, password });
        },
        saveBook: async (parent, { book }, context) => {
            if (context._id){
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context._id },
                    { $addToSet: { savedBooks: book } },
                    { new: true, runValidators: true }
                  );
                  return updatedUser;
            }
        }

    },

};

module.exports = resolvers;
