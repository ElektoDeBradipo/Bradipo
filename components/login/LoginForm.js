import { Button, Form, Icon, Input } from "antd";
import PASSWORD_SIZE from "constants";
import React from "react";

const submitHandler = (event, form, mutation) => {
  event.preventDefault();
  form.validateFields((err, values) => {
    if (!err) mutation.trigger({ variables: values.login });
  });
};

const LoginForm = ({ form, mutation }) => (
  <div>
    <h2 style={{ textAlign: "center" }}>Login</h2>
    <Form
      layout="vertical"
      onSubmit={event => submitHandler(event, form, mutation)}
    >
      <Form.Item>
        {form.getFieldDecorator("login.email", {
          rules: [
            { required: true, message: "Please input your email" },
            { type: "email" }
          ]
        })(
          <Input
            id="login.email"
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="email"
            placeholder="email"
          />
        )}
      </Form.Item>

      <Form.Item>
        {form.getFieldDecorator("login.password", {
          rules: [
            {
              required: true,
              message: "Please input your Password!"
            },
            { min: PASSWORD_SIZE }
          ]
        })(
          <Input
            id="login.password"
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>

      <Button
        style={{ float: "right" }}
        type="primary"
        htmlType="submit"
        loading={mutation.loading}
      >
        Login
      </Button>
    </Form>
  </div>
);

export default Form.create()(LoginForm);
