import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query getUsers {
    users {
      _id
      email
      username
      password
    }
  }
`;

export const QUERY_USER = gql`
query getSingleUser($userId: ID!) {
  user(userId: $userId) {
    _id
    username
    email
    password
  }
}
`
