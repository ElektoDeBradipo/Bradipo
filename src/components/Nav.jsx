import React, { Fragment, Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Header, Box, Title, Menu, Layer, Button } from '../grommet'
import { TokenContext } from './TokenContext'
import { Login } from '.'

export class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showLogin: false
    }
  }

  render () {
    const { showLogin } = this.state

    return (
      <TokenContext.Consumer>
        {({ token, setToken }) => {
          return (
            <Fragment>
              <Header
                colorIndex='grey-4'
                pad={{
                  between: 'large',
                  horizontal: 'medium'
                }}
                justify='center'
              >
                <Title>Elekto De Bradipo</Title>
                <Box
                  flex
                  justify='start'
                  direction='row'
                  responsive={false}
                >
                  <Menu inline direction='row'>
                    <NavLink
                      to='/'
                      exact
                      className='grommetux-anchor'
                      activeClassName='active'
                    >
                                            Home
                    </NavLink>
                    {token && (
                      <Fragment>
                        <NavLink
                          to='/movie'
                          className='grommetux-anchor'
                          activeClassName='active'
                        >
                                                    Movie
                        </NavLink>
                        <NavLink
                          to='/show'
                          className='grommetux-anchor'
                          activeClassName='active'
                        >
                                                    Show
                        </NavLink>
                      </Fragment>
                    )}
                  </Menu>
                </Box>
                <Box
                  flex
                  justify='end'
                  direction='row'
                  responsive={false}
                >
                  {token ? (
                    <Button
                      label='Logout'
                      // onClick={() => {
                      //     this.setState({
                      //         showLogin: false,
                      //     });
                      //     setToken(null);
                      // }}
                    />
                  ) : (
                    <Button
                      label='Login'
                      onClick={() => {
                        this.setState({
                          showLogin: true
                        })
                      }}
                    />
                  )}
                </Box>
              </Header>
              <Layer
                closer
                overlayClose
                hidden={!!(!showLogin || token)}
                onClose={() => {
                  this.setState({ showLogin: false })
                }}
              >
                <Login setToken={setToken} />
              </Layer>
            </Fragment>
          )
        }}
      </TokenContext.Consumer>
    )
  }
}
