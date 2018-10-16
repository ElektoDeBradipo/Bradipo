import { List, Skeleton } from "antd";
import gql from "graphql-tag";
import { Query } from "react-apollo";

export const roomMoviesQuery = gql`
  query roomMovies($id: ID!, $mode: MovieModeInput!) {
    room(id: $id) {
      id
      movies(mode: $mode) {
        id
        title
        overview
        releaseDate
      }
    }
  }
`;

export default ({ roomId, mode }) => (
  <Query query={roomMoviesQuery} variables={{ id: roomId, mode }}>
    {({ loading, error, data }) => {
      if (error) return <div>Error</div>;
      if (loading)
        return (
          <List
            itemLayout="vertical"
            size="large"
            dataSource={new Array(10)}
            renderItem={(item, index) => (
              <List.Item key={index}>
                <Skeleton loading={true} active />
              </List.Item>
            )}
          />
        );
      return (
        <List
          itemLayout="vertical"
          size="large"
          dataSource={data.room.movies}
          renderItem={(item, index) => (
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
                // avatar={<Avatar src={item.avatar} />}
                title={item.title}
                description={item.overview}
              />
              {/* <h2>{index + 1}</h2> */}
              {item.content}
            </List.Item>
          )}
        />
      );
    }}
  </Query>
);
