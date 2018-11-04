import { Layout, Menu, Avatar, Badge, Button } from "antd";
import Link from "next/link";
import { withRouter } from "next/router";
import UserProfile from "./UserProfile";

const navItems = [
  {
    label: "Home",
    route: "/"
  },
  {
    label: "Rooms",
    route: "/rooms"
  },
  {
    label: "My movies",
    route: "/movies"
  }
];

const getSelectedKeys = route => {
  const index = navItems.findIndex(item => item.route == route);
  return index > -1 ? [`${index}`] : [];
};

const Header = withRouter(({ router }) => (
  <Layout.Header>
    <h2 style={{ color: "#fff", float: "left", margin: 0, marginRight: 25 }}>
      Elekto De Bradipo
    </h2>
    <UserProfile>
      {({ toggle }) => (
        <div style={{ float: "right" }}>
          <Avatar className="grow clickable" icon="user" onClick={toggle} />
        </div>
      )}
    </UserProfile>

    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      selectedKeys={getSelectedKeys(router.route)}
      style={{ lineHeight: "64px" }}
    >
      {navItems.map((item, index) => (
        <Menu.Item key={index}>
          <Link href={item.route}>
            <a>{item.label}</a>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  </Layout.Header>
));

export default Header;
