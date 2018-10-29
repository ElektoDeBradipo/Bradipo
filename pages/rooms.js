import { Layout, Button } from "antd";
import { withRouter } from "next/router";
import Header from "../components/layout/Header";
import RoomList from "../components/room/RoomList";
import Link from "next/link";

const RoomsPage = () => (
  <Layout>
    <Header />
    <Layout.Content style={{ padding: "0 50px" }}>
      <Link href="/rooms/create">
        <Button
          type="primary"
          icon="plus"
          size="large"
          style={{
            float: "right",
            marginTop: 34
          }}
        >
          Create
        </Button>
      </Link>

      <h1 style={{ textAlign: "center", margin: 34 }}>Rooms</h1>
      <RoomList />
    </Layout.Content>
  </Layout>
);

export default withRouter(RoomsPage);
