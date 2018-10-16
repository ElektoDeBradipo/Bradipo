import { Button, Form, Icon, Input } from "antd";
import PASSWORD_SIZE from "constants";
import React from "react";

const submitHandler = (event, form, mutation) => {
  event.preventDefault();
  form.validateFields((err, values) => {
    if (!err) mutation.trigger({ variables: values.signup });
  });
};

const SignupForm = ({ form, mutation }) => (
  <div>
    <h2 style={{ textAlign: "center" }}>Sign Up</h2>
    <Form
      layout="vertical"
      onSubmit={event => submitHandler(event, form, mutation)}
    >
      <Form.Item>
        {form.getFieldDecorator("signup.firstName", {
          rules: [{ required: true, message: "Please input your firstname" }]
        })(
          <Input
            id="signup.firstName"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="username"
            placeholder="firstname"
          />
        )}
      </Form.Item>
      <Form.Item>
        {form.getFieldDecorator("signup.lastName", {
          rules: [{ required: true, message: "Please input your lastname" }]
        })(
          <Input
            id="signup.lastName"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="username"
            placeholder="lastname"
          />
        )}
      </Form.Item>
      <Form.Item>
        {form.getFieldDecorator("signup.nickname", {
          rules: [{ required: true, message: "Please input your nickname" }]
        })(
          <Input
            id="signup.nickname"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="username"
            placeholder="nickname"
          />
        )}
      </Form.Item>
      <Form.Item>
        {form.getFieldDecorator("signup.email", {
          rules: [
            { required: true, message: "Please input your email" },
            { type: "email" }
          ]
        })(
          <Input
            id="signup.email"
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="email"
            placeholder="email"
          />
        )}
      </Form.Item>
      <Form.Item>
        {form.getFieldDecorator("signup.password", {
          rules: [
            {
              required: true,
              message: "Please input your Password!"
            },
            { min: PASSWORD_SIZE }
          ]
        })(
          <Input
            id="signup.password"
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
        Sign Up
      </Button>
    </Form>
  </div>
);

export default Form.create()(SignupForm);
