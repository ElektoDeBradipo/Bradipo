import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { App as GrommetApp } from './grommet'
import { Nav, TokenContext } from './components'
import { HomePage, MoviePage, ErrorPage } from './pages'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.setToken = token => {
      window.sessionStorage.token = token
      this.setState(prevState => {
        return {
          ...prevState,
          tokenState: { ...prevState.tokenState, token }
        }
      })
    }
    this.state = {
      tokenState: {
        token: window.sessionStorage.token,
        setToken: this.setToken
      }
    }
  }

  render () {
    const { tokenState } = this.state
    return (
      <Router>
        <TokenContext.Provider value={tokenState}>
          <GrommetApp centered={false}>
            <Nav />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/movie' component={MoviePage} />
              <Route
                render={props => (
                  <ErrorPage code={404} message='Not Found' />
                )}
              />
            </Switch>
          </GrommetApp>
        </TokenContext.Provider>
      </Router>
    )
  }
}
