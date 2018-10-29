import { Button, Form, Input } from "antd";

const submitHandler = (event, form, mutation) => {
  event.preventDefault();
  form.validateFields((err, values) => {
    if (!err) mutation.trigger({ variables: values });
  });
};

const FriendAddForm = ({ form, mutation }) => (
  <Form
    layout="inline"
    onSubmit={event => submitHandler(event, form, mutation)}
  >
    <Form.Item>
      {form.getFieldDecorator("login.email", {
        rules: [
          { required: true, message: "Please input your email" },
          { type: "email" }
        ]
      })(<Input id="login.email" type="email" placeholder="email" />)}
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit" loading={mutation.loading}>
        Add
      </Button>
    </Form.Item>
  </Form>
);

export default Form.create()(FriendAddForm);
