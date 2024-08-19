const typeDefs = `#graphql
    type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [String]!
    }
    type Book {
    _id: ID
    description: String
    authors: [String]!
    image: String
    link: String
    title: String
    }
    input BookInput {
    _id: ID
    description: String
    authors: [String]!
    image: String
    link: String
    title: String
    }
    type Query {
    users: [User]
    user(userId: ID!): User
    books: [Book]
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    saveBook(book: BookInput): User
  }
`
module.exports = typeDefs;