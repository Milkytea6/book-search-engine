const typeDefs = `#graphql
    type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
    }
    type Book {
    bookId: ID
    description: String
    authors: [String]!
    image: String
    link: String
    title: String!
    }
    input BookInput {
    _id: ID
    description: String
    authors: [String]!
    image: String
    link: String
    title: String
    }
    type Auth{
      token: String!
      user: User
    }
    type Query {
    me: [User]
    users: [User]
    user(userId: ID!): User
    book(bookId: ID!): Book
  }
  type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
    saveBook(book: BookInput): User
  }
`
module.exports = typeDefs;