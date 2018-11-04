import { Icon, Input, Spin } from "antd";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import MovieList from "./MovieList";

export const SEARCH_USER_MOVIE = gql`
  query UserMoviesSearch($search: String) {
    moviesUser(search: $search) {
      id
      title
      releaseDate
      overview
      watched
      watchlisted
    }
  }
`;

export default class MovieSearch extends React.Component {
  state = {
    search: ""
  };

  emitEmpty = () => {
    this.setState({ search: "" });
  };

  onChangeSearch = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const displayResults = search.length > 2;
    const suffix = search ? (
      <Icon type="close-circle" onClick={this.emitEmpty} />
    ) : null;
    return (
      <div>
        <Input
          prefix={<Icon type="search" />}
          suffix={suffix}
          placeholder="star wars"
          onChange={this.onChangeSearch}
          value={search}
        />
        {displayResults && (
          <Query
            query={SEARCH_USER_MOVIE}
            variables={{ search }}
            fetchPolicy="network-only"
          >
            {({ data, loading, error }) => (
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: 14
                }}
              >
                {loading ? (
                  <div style={{ textAlign: "center" }}>
                    <Spin />
                  </div>
                ) : (
                  <MovieList
                    movies={
                      !loading && !error ? data.moviesUser.slice(0, 5) : []
                    }
                  />
                )}
              </div>
            )}
          </Query>
        )}
      </div>
    );
  }
}
