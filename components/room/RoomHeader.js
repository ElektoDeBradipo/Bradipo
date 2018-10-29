import { Radio, Skeleton } from "antd";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const roomNameQuery = gql`
  query roomName($id: ID!) {
    room(id: $id) {
      id
      name
    }
  }
`;

const RoomHeader = ({ roomId, onModeChange, mode }) => (
  <div style={{ marginBottom: "30px", textAlign: "center" }}>
    <Query query={roomNameQuery} variables={{ id: roomId }}>
      {({ loading, error, data }) => {
        if (error) return <p>Error</p>;
        return (
          <div style={{ width: 400, margin: "auto" }}>
            <Skeleton paragraph={false} loading={loading}>
              <h1>{!loading && data.room.name}</h1>
            </Skeleton>
          </div>
        );
      }}
    </Query>
    <Radio.Group
      value={mode}
      buttonStyle="solid"
      onChange={e => onModeChange(e.target.value)}
    >
      <Radio.Button value="WATCHLISTED">Watchlisted</Radio.Button>
      <Radio.Button value="TRENDING">Trending</Radio.Button>
    </Radio.Group>
  </div>
);

export default RoomHeader;
