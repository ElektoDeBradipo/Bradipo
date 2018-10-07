import { Query } from "react-apollo";
import gql from "graphql-tag";

export const roomMoviesQuery = gql`
  query roomMovies($id: ID!) {
    room(id: $id) {
      id
      movies(mode: TRENDING) {
        id
        title
        overview
        releaseDate
      }
    }
  }
`;

export default ({ roomId }) => (
  <Query query={roomMoviesQuery} variables={{ id: roomId }}>
    {({ loading, error, data }) => {
      if (error) return <div>Error</div>;
      if (loading) return <div>Loading</div>;
      return (
        <section>
          {data.room.movies.map(movie => (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </div>
          ))}
        </section>
      );
    }}
  </Query>
);
