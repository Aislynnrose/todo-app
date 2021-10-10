import { gql } from '@apollo/client';

// LOGIN_USER will execute the loginUser mutation set up using Apollo Server.

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
  `;
  
  // ADD_USER will execute the addUser mutation.
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


// SAVE_TODO will execute the saveTodo mutation.

export const SAVE_TODO = gql`
mutation saveTodo($todoData: TodoInput!){
  saveTodo(todoData: $todoData) {
    
    _id
    username
    email
    savedTodos
    {
      todo
      priority
    }
  }
}
`;

// REMOVE_TODO will execute the removeTodo mutation.
export const REMOVE_TODO = gql`
mutation removeTodo($_id: ID!){
  removeTodo(_id: $_id) {
    
    _id
    username
    email
    savedTodos
    {
      todo
      priority
    }
  }
}
`;