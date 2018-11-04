import { List, Avatar, Icon } from "antd";

const MovieList = ({ movies, loading }) => (
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
          <Icon type="eye" theme={watched ? "filled" : "outlined"} />,
          <Icon type="project" theme={watchlisted ? "filled" : "outlined"} />
        ]}
      >
        <List.Item.Meta
          title={title}
          description={new Date(releaseDate).toLocaleDateString()}
        />
        {overview}
      </List.Item>
    )}
  />
);

export default MovieList;
