import { Layout } from "antd";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import Header from "./Header";

const AppLayout = ({ children }) => (
  <div>
    <Layout>
      <Header />
      <Layout.Content style={{ padding: "0 50px" }}>
        <Breadcrumb />
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          {children}
        </div>
      </Layout.Content>
      <Footer />
    </Layout>
  </div>
);

export default AppLayout;
