import { Drawer, Skeleton, Input, Button } from "antd";
import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";
import FriendList from "./FriendList";
import MutationWrapper from "../MutationWrapper";
import FriendAddForm from "./FriendAddForm";

export const userProfileGql = gql`
  query UserProfile {
    me {
      id
      nickname
      firstName
      lastName
      friends {
        id
        nickname
      }
    }
  }
`;

export const removeFriendGql = gql`
  mutation RemoveFriend($friendId: ID!) {
    friendRemove(friendId: $friendId) {
      id
      nickname
    }
  }
`;

export const addFriendGql = gql`
  mutation AddFriend($friendId: ID!) {
    friendAdd(friendId: $friendId) {
      id
      nickname
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
              width={400}
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <h4>Friends</h4>
              <MutationWrapper
                mutation={removeFriendGql}
                refetchQueries={() => [{ query: userProfileGql }]}
              >
                <FriendList
                  loading={loading}
                  friends={!error && !loading && data.me.friends}
                />
              </MutationWrapper>
              <MutationWrapper
                mutation={addFriendGql}
                refetchQueries={() => [{ query: userProfileGql }]}
              >
                <FriendAddForm />
              </MutationWrapper>
            </Drawer>
          )}
        </Query>
      </>
    );
  }
}
