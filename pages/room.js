import { withRouter } from "next/router";
import Layout from "../components/Layout";
import RoomMovieList from "../components/RoomMovieList";

export default withRouter(props => (
  <Layout>
    <h1>Room: {props.router.query.id}</h1>
    <RoomMovieList roomId={props.router.query.id} />
  </Layout>
));
