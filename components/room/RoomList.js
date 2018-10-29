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
        <Row gutter={16}>
          {data.me.rooms.map(room => (
            <Col span={8} key={room.id}>
              <Card
                hoverable
                bordered={false}
                title={room.name}
                // extra={<a href="#">More</a>}
                style={{ width: 300 }}
                onClick={cardClickHandler(room.id)}
              >
                {room.members.map(member => (
                  <p key={member.id}>{member.nickname}</p>
                ))}
              </Card>
            </Col>
          ))}
        </Row>
      );
    }}
  </Query>
);

export default RoomList;
