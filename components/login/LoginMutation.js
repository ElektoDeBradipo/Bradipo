import gql from "graphql-tag";
import React from "react";
import { Mutation } from "react-apollo";
const LoginGql = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const LoginMutation = ({ children }) => (
  <Mutation mutation={LoginGql}>
    {(trigger, result) =>
      React.Children.map(children, child =>
        React.cloneElement(child, { mutation: { trigger, ...result } })
      )
    }
  </Mutation>
);

export default LoginMutation;
