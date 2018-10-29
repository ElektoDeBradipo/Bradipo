import { Drawer, Skeleton, List } from "antd";
import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export const userProfileGql = gql`
  query UserProfile {
    me {
      id
      nickname
      firstName
      lastName
      friends {
        nickname
      }
    }
  }
`;

export default class UserProfile extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  toggleDrawer = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    return (
      <>
        {this.props.children({
          toggle: this.toggleDrawer,
          visible: this.state.visible
        })}
        <Query query={userProfileGql}>
          {({ data, loading, error }) => (
            <Drawer
              title={
                <div style={{ textAlign: "center" }}>
                  <Skeleton paragraph={false} loading={loading}>
                    <h3>{!loading && !error && `@${data.me.nickname}`}</h3>
                    <p
                      style={{
                        fontSize: 14,
                        color: "rgba(0, 0, 0, 0.65)"
                      }}
                    >
                      {!loading &&
                        !error &&
                        `${data.me.firstName} ${data.me.lastName}`}
                    </p>
                  </Skeleton>
                </div>
              }
              //   width={400}
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <h4>Friends</h4>
              <List
                itemLayout="horizontal"
                loading={loading}
                dataSource={error ? [] : data.me.friends}
                renderItem={friend => (
                  <List.Item>
                    <List.Item.Meta
                      //   avatar={
                      //     <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      //   }
                      title={friend.nickname}
                      //   description=""
                    />
                  </List.Item>
                )}
              />
              ,
            </Drawer>
          )}
        </Query>
      </>
    );
  }
}
