import { Icon, List } from "antd";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { USER_MOVIES } from "./UserMoviesQuery";

export const USER_WATCHLISTED = gql`
  mutation UserWatchlisted($movieId: ID!, $value: Boolean!) {
    userWatchlisted(movieId: $movieId, value: $value) {
      id
      title
      overview
      releaseDate
      watched
      watchlisted
    }
  }
`;

export const USER_WATCHED = gql`
  mutation UserWatched($movieId: ID!, $value: Boolean!) {
    userWatched(movieId: $movieId, value: $value) {
      id
      title
      overview
      releaseDate
      watched
      watchlisted
    }
  }
`;

const parseDate = date => {
  const d = new Date(date);
  return `${d.getFullYear()}`;
};

const MovieList = ({ movies, loading }) => (
  <Mutation
    mutation={USER_WATCHED}
    update={(cache, { data: { userWatched } }) => {
      const { me } = cache.readQuery({ query: USER_MOVIES });

      const exist = me.movies.find(x => x.id == userWatched.id);
      if (!exist) {
        cache.writeQuery({
          query: USER_MOVIES,
          data: {
            me: { ...me, movies: me.movies.concat([userWatched]) }
          }
        });
      }
    }}
  >
    {toggleWatched => (
      <Mutation
        mutation={USER_WATCHLISTED}
        update={(cache, { data: { userWatchlisted } }) => {
          const { me } = cache.readQuery({ query: USER_MOVIES });

          const exist = me.movies.find(x => x.id == userWatchlisted.id);
          if (!exist) {
            cache.writeQuery({
              query: USER_MOVIES,
              data: {
                me: { ...me, movies: me.movies.concat([userWatchlisted]) }
              }
            });
          }
        }}
      >
        {toggleWatchlisted => (
          <List
            itemLayout="vertical"
            size="large"
            dataSource={movies}
            renderItem={({
              id,
              title,
              overview,
              releaseDate,
              watched,
              watchlisted
            }) => (
              <List.Item
                key={id}
                actions={[
                  <Icon
                    type="eye"
                    theme={watched ? "filled" : "outlined"}
                    onClick={() => {
                      toggleWatched({
                        variables: { movieId: id, value: !watched }
                      });
                    }}
                  />,
                  <Icon
                    type="project"
                    theme={watchlisted ? "filled" : "outlined"}
                    onClick={() => {
                      toggleWatchlisted({
                        variables: { movieId: id, value: !watchlisted }
                      });
                    }}
                  />
                ]}
              >
                <List.Item.Meta
                  title={title}
                  description={parseDate(releaseDate)}
                />
                {overview}
              </List.Item>
            )}
          />
        )}
      </Mutation>
    )}
  </Mutation>
);

export default MovieList;
