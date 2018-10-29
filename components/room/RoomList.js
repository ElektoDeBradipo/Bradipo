import { Card, Col, Row } from "antd";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Router from "next/router";
export const userRoomsQuery = gql`
  query userRooms {
    me {
      id
      rooms {
        id
        name
        members {
          id
          nickname
        }
      }
    }
  }
`;

const cardClickHandler = id => () => {
  Router.push({
    pathname: "/rooms/detail",
    query: { id }
  });
};

const RoomList = () => (
  <Query query={userRoomsQuery}>
    {({ loading, error, data }) => {
      if (error) return <div>Error: {error.message}</div>;
      if (loading) return <div>Loading</div>;
      return (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly"
          }}
        >
          {data.me.rooms.map(room => (
            <Card
              key={room.id}
              hoverable
              bordered={false}
              title={room.name}
              // extra={<a href="#">More</a>}
              style={{ width: 300, margin: 10 }}
              onClick={cardClickHandler(room.id)}
            >
              {room.members.map(member => (
                <p key={member.id}>{member.nickname}</p>
              ))}
            </Card>
          ))}
        </div>
      );
    }}
  </Query>
);

export default RoomList;
