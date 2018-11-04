import { Layout, Tabs } from "antd";
import { withRouter } from "next/router";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import MovieList from "../components/movies/MovieList";
import MovieSearch from "../components/movies/MovieSearch";
import UserMoviesQuery from "../components/movies/UserMoviesQuery";

const MoviesPage = () => (
  <Layout>
    <Header />
    <Layout.Content style={{ padding: "0 50px" }}>
      <h1 style={{ textAlign: "center", margin: 34 }}>Movies</h1>
      <div style={{ marginBottom: 24 }}>
        <MovieSearch />
      </div>
      <UserMoviesQuery>
        {({ movies, loading }) => (
          <Tabs type="card" className="movies-tabs">
            <Tabs.TabPane tab="Watchlisted" key="1">
              <MovieList movies={movies.filter(x => x.watchlisted)} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Watched" key="2">
              <MovieList movies={movies.filter(x => x.watched)} />
            </Tabs.TabPane>
          </Tabs>
        )}
      </UserMoviesQuery>
    </Layout.Content>
    <Footer />
    <style global jsx>{`
      .movies-tabs > .ant-tabs-content {
        min-height: 120px;
        margin-top: -16px;
      }

      .movies-tabs > .ant-tabs-content > .ant-tabs-tabpane {
        background: #fff;
        padding: 16px;
      }

      .movies-tabs > .ant-tabs-bar {
        border-color: #fff;
      }

      .movies-tabs > .ant-tabs-bar .ant-tabs-tab {
        border-color: transparent;
        background: transparent;
      }

      .movies-tabs > .ant-tabs-bar .ant-tabs-tab-active {
        border-color: #fff;
        background: #fff;
      }
    `}</style>
  </Layout>
);

export default withRouter(MoviesPage);
