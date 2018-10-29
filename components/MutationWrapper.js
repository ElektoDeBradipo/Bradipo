import { Mutation } from "react-apollo";

const MutationWrapper = ({ children, ...props }) => (
  <Mutation {...props}>
    {(trigger, result) =>
      React.Children.map(children, child =>
        React.cloneElement(child, { mutation: { trigger, ...result } })
      )
    }
  </Mutation>
);

export default MutationWrapper;
