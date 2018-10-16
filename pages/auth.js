import { Layout, Tabs } from "antd";
import LoginForm from "../components/login/LoginForm";
import LoginMutation from "../components/login/LoginMutation";
import MutationMessage from "../components/MutationMessage";
import MutationRedirection from "../components/MutationRedirection";
import SignupForm from "../components/signup/SignupForm";
import SignupMutation from "../components/signup/SignupMutation";
import TokenStore from "../components/TokenStore";

export default () => (
  <Layout style={{ height: "100%" }}>
    <Layout.Content style={{ padding: "50px", height: "100%" }}>
      <h1 style={{ textAlign: "center", margin: 80 }}>Elekto De Bradipo</h1>
      <div
        style={{
          background: "#fff",
          padding: 24,
          minHeight: 280,
          borderRadius: 24,
          maxWidth: 800,
          margin: "auto"
        }}
      >
        <Tabs defaultActiveKey="1" size="large">
          <Tabs.TabPane tab="Login" key="1">
            <LoginMutation>
              <LoginForm />
              <MutationMessage success={true} error={true} />
              <TokenStore />
              <MutationRedirection />
            </LoginMutation>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Sign Up" key="2">
            <SignupMutation>
              <SignupForm />
              <MutationMessage success={true} error={true} />
              <TokenStore />
              <MutationRedirection />
            </SignupMutation>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </Layout.Content>
  </Layout>
);
