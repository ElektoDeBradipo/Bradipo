import { Query } from "react-apollo";
import gql from "graphql-tag";

export const USER_MOVIES = gql`
  query UserMovies($watched: Boolean, $watchlisted: Boolean) {
    me {
      id
      movies(watched: $watched, watchlisted: $watchlisted) {
        id
        title
        overview
        releaseDate
        watched
        watchlisted
      }
    }
  }
`;

const UserMoviesQuery = ({ watched, watchlisted, children }) => (
  <Query query={USER_MOVIES} variables={{ watched, watchlisted }}>
    {({ data, loading, error }) =>
      React.Children.map(children, child =>
        React.cloneElement(child, {
          movies: !error && !loading ? data.me.movies : [],
          loading
        })
      )
    }
  </Query>
);

export default UserMoviesQuery;
