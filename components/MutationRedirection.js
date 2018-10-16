import Router from "next/router";

const MutationRedirection = ({ mutation }) => {
  if (mutation.data && !mutation.error) {
    Router.push("/");
  }
  return null;
};

export default MutationRedirection;
