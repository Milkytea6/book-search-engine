const { User, bookSchema } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
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
            const user = User.create({ username, email, password });
            const token = signToken(user);
            return {
                token,
                user
            }
        },
        login: async (parent, { email, password }) => {

            const user = await User.findOne({  email: email  });
            if (!user) {
                throw AuthenticationError
            }
        
            const correctPw = await user.isCorrectPassword(password);
        
            if (!correctPw) {
                throw AuthenticationError
            }
            const token = signToken(user);
            return { token, user };
        },
        saveBook: async (parent, { input }, context) => {
            if (context._id){
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context._id },
                    { $addToSet: { savedBooks: input } },
                    { new: true, runValidators: true }
                  );
                  return updatedUser;
            }
        }

    },

};

module.exports = resolvers;
