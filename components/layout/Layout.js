import { Layout } from "antd";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import Header from "./Header";

const AppLayout = ({ children, leftSider, rightSider }) => (
  <div>
    <Layout>
      <Header />
      <Layout.Content style={{ padding: "0 50px" }}>
        <Breadcrumb />
        {leftSider || rightSider ? (
          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            {leftSider && (
              <Layout.Sider width={200} style={{ background: "#fff" }}>
                {leftSider}
              </Layout.Sider>
            )}
            <Layout.Content style={{ padding: "0 24px", minHeight: 280 }}>
              {children}
            </Layout.Content>
            {rightSider && (
              <Layout.Sider width={200} style={{ background: "#fff" }}>
                {rightSider}
              </Layout.Sider>
            )}
          </Layout>
        ) : (
          <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
            {children}
          </div>
        )}
      </Layout.Content>
      <Footer />
    </Layout>
  </div>
);

export default AppLayout;
