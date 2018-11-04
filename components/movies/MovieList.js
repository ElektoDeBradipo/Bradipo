import { List, Avatar, Icon, Button } from "antd";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

export const USER_WATCHLISTED = gql`
  mutation UserWatchlisted($movieId: ID!, $value: Boolean!) {
    userWatchlisted(movieId: $movieId, value: $value) {
      id
      watched
      watchlisted
    }
  }
`;

export const USER_WATCHED = gql`
  mutation UserWatched($movieId: ID!, $value: Boolean!) {
    userWatched(movieId: $movieId, value: $value) {
      id
      watched
      watchlisted
    }
  }
`;

const parseDate = date => {
  const d = new Date(date);
  return `${d.getMonth()} - ${d.getFullYear()}`;
};

const MovieList = ({ movies, loading }) => (
  <Mutation mutation={USER_WATCHED}>
    {toggleWatched => (
      <Mutation mutation={USER_WATCHLISTED}>
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
