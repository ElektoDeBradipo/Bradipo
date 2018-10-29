import { Button, Form, Input, Select, Spin } from "antd";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const userFriendsGql = gql`
  query userFriends {
    me {
      id
      friends {
        id
        nickname
      }
    }
  }
`;

const submitHandler = (event, form, mutation) => {
  event.preventDefault();
  form.validateFields((err, values) => {
    if (!err) mutation.trigger({ variables: values.room });
  });
};

const RoomCreateForm = ({ form, mutation }) => (
  <Form
    layout="vertical"
    onSubmit={event => submitHandler(event, form, mutation)}
  >
    <Form.Item label="Name">
      {form.getFieldDecorator("room.name", {
        rules: [
          { required: true, message: "Please input the room name" },
          { max: 32 }
        ]
      })(<Input id="room.name" placeholder="My super room" />)}
    </Form.Item>
    <Form.Item label="Type">
      {form.getFieldDecorator("room.type", {
        initialValue: "MOVIE",
        rules: [{ required: true, message: "Please select the room type" }]
      })(
        <Select id="room.type">
          <Select.Option value="MOVIE">Movie</Select.Option>
        </Select>
      )}
    </Form.Item>
    <Query query={userFriendsGql}>
      {({ loading, error, data }) => (
        <Form.Item label="Members">
          {form.getFieldDecorator("room.members")(
            <Select
              mode="multiple"
              id="room.members"
              notFoundContent={
                loading ? <Spin size="small" /> : error ? "Error" : null
              }
            >
              {!loading &&
                !error &&
                data.me.friends.map(friend => (
                  <Select.Option key={friend.id} value={friend.id}>
                    {friend.nickname}
                  </Select.Option>
                ))}
            </Select>
          )}
        </Form.Item>
      )}
    </Query>

    <Button type="primary" htmlType="submit" loading={mutation.loading}>
      Create
    </Button>
  </Form>
);

export default Form.create()(RoomCreateForm);
