const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String
    savedTodos: [Todo]
  }

  type Todo {
    _id: ID
    todo: String
    priority: Int
  }

  type Auth {
    token:ID!
    user: User
  }

  input TodoInput {
    todo: String
    priority: Int
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email:String!, password:String!):Auth
    addUser(name:String!, email:String!, password:String!):Auth
    saveTodo(todoData:TodoInput!):User
    removeTodo(_id:ID!):User
  }
`;

module.exports = typeDefs;