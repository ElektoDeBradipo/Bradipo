import { withRouter } from "next/router";
import Layout from "../components/layout/Layout";
import RoomHeader from "../components/room/RoomHeader";
import RoomMovieList from "../components/room/RoomMovieList";

class RoomPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mode: "WATCHLISTED" };
  }

  handleModeChange(value) {
    this.setState({ mode: value });
  }

  render() {
    const roomId = this.props.router.query.id;
    return (
      <Layout>
        <RoomHeader
          roomId={roomId}
          onModeChange={this.handleModeChange.bind(this)}
          mode={this.state.mode}
        />
        <RoomMovieList roomId={roomId} mode={this.state.mode} />
      </Layout>
    );
  }
}

export default withRouter(RoomPage);
