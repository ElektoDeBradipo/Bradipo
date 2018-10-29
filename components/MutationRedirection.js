import Router from "next/router";

const MutationRedirection = ({ mutation, url, as, option }) => {
  if (mutation.data && !mutation.error) {
    Router.push(url || "/", as, option);
  }
  return null;
};

export default MutationRedirection;
