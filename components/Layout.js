import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <style jsx global>{`
      body {
        font-family: Roboto, Arial, sans-serif;
      }
    `}</style>
  </div>
);

export default Layout;
