import { Col, Divider, Layout, Row } from "antd";
import { withRouter } from "next/router";
import LoginForm from "../components/login/LoginForm";
import LoginMutation from "../components/login/LoginMutation";
import MutationMessage from "../components/MutationMessage";
import MutationRedirection from "../components/MutationRedirection";
import SignupForm from "../components/signup/SignupForm";
import SignupMutation from "../components/signup/SignupMutation";
import TokenStore from "../components/TokenStore";

export default withRouter(props => (
  <Layout style={{ height: "100%" }}>
    <Layout.Content style={{ padding: "50px", height: "100%" }}>
      <h1 style={{ textAlign: "center" }}>Elekto De Bradipo</h1>
      <div
        style={{
          background: "#fff",
          padding: 24,
          minHeight: 280,
          borderRadius: 24
        }}
      >
        <Row type="flex">
          <Col style={{ flexGrow: 1 }}>
            <SignupMutation>
              <SignupForm />
              <MutationMessage success={true} error={true} />
              <TokenStore />
              <MutationRedirection />
            </SignupMutation>
          </Col>
          <Col style={{ marginLeft: 24, marginRight: 24 }}>
            <Divider type="vertical" style={{ height: "100%" }} />
          </Col>
          <Col style={{ flexGrow: 1 }}>
            <LoginMutation>
              <LoginForm />
              <MutationMessage success={true} error={true} />
              <TokenStore />
              <MutationRedirection />
            </LoginMutation>
          </Col>
        </Row>
      </div>
    </Layout.Content>
  </Layout>
));
