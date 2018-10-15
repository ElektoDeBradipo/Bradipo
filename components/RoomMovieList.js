import { Query } from "react-apollo";
import gql from "graphql-tag";
import { List, Avatar, Icon } from "antd";

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
        <List
          itemLayout="vertical"
          size="large"
          dataSource={data.room.movies}
          renderItem={item => (
            <List.Item
              key={item.title}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={item.title}
                description={item.overview}
              />
              {item.content}
            </List.Item>
          )}
        />
      );
    }}
  </Query>
);
