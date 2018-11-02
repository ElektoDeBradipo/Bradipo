import { Button, Form, Select, Spin } from "antd";
import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";

const USER_SEARCH = gql`
  query UserSearch($search: String) {
    users(search: $search) {
      id
      nickname
    }
  }
`;

class FriendAddForm extends React.Component {
  state = {
    data: [],
    value: {},
    fetching: false
  };

  fetchUser = client => async search => {
    this.setState({ data: [], fetching: true });
    const response = await client.query({
      query: USER_SEARCH,
      variables: { search }
    });

    this.setState({ data: response.data.users, fetching: false });
  };

  handleChange = value => {
    const user = this.state.data.find(x => x.id == value);
    this.setState({
      value: user || {},
      data: [],
      fetching: false
    });
  };

  addFriend = () => {
    const { mutation } = this.props;
    const { value } = this.state;
    if (value && value.id) {
      mutation.trigger({ variables: { friendId: value.id } });
    }
  };

  render() {
    const { mutation } = this.props;
    const { fetching, data, value } = this.state;
    return (
      <ApolloConsumer>
        {client => (
          <div className="flex">
            <Select
              value={value.nickname}
              showSearch
              placeholder="Select users"
              notFoundContent={fetching ? <Spin size="small" /> : null}
              showArrow={false}
              filterOption={false}
              onSearch={this.fetchUser(client)}
              onChange={this.handleChange}
              style={{ width: "100%" }}
            >
              {data.map(user => (
                <Select.Option key={user.id}>{user.nickname}</Select.Option>
              ))}
            </Select>

            <Button
              type="primary"
              loading={mutation.loading}
              onClick={this.addFriend}
              style={{ marginLeft: 14 }}
            >
              Add
            </Button>
          </div>
        )}
      </ApolloConsumer>
    );
  }
}

export default Form.create()(FriendAddForm);
