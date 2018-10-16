import gql from "graphql-tag";
import React from "react";
import { Mutation } from "react-apollo";
export const SignupGql = gql`
  mutation signup(
    $firstName: String!
    $lastName: String!
    $nickname: String!
    $email: String!
    $password: String!
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      nickname: $nickname
      email: $email
      password: $password
    ) {
      token
    }
  }
`;

const SignupMutation = ({ children }) => (
  <Mutation mutation={SignupGql}>
    {(trigger, result) =>
      React.Children.map(children, child =>
        React.cloneElement(child, { mutation: { trigger, ...result } })
      )
    }
  </Mutation>
);

export default SignupMutation;
