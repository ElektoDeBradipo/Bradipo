import { List, Skeleton } from "antd";

const removeHandler = (mutation, friendId) => () => {
  mutation.trigger({ variables: { friendId } });
};

const FriendList = ({ friends, loading, mutation }) => (
  <>
    {loading && (
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
    )}
    {friends && (
      <List
        itemLayout="horizontal"
        dataSource={friends}
        renderItem={friend => (
          <List.Item
            actions={[
              <a onClick={removeHandler(mutation, friend.id)}>remove</a>
            ]}
          >
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
    )}
  </>
);

export default FriendList;
