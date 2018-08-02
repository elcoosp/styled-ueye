import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import Container from './Container'
import MenuItem from './MenuItem'
import MenuList from './MenuList'
class BurgerMenu extends Component {
  state = { isOpen: false }
  toggleIsOpen = e => {
    e.preventDefault()
    this.setState(state => ({ ...state, isOpen: !state.isOpen }))
  }
  render() {
    const {
      toggler: Toggler,
      items,
      entryAnimation,
      getExitAnimation
    } = this.props
    const { isOpen } = this.state
    return (
      <Fragment>
        <Toggler
          isOpen={isOpen}
          onClick={this.toggleIsOpen}
          aria-haspopup="true"
          aria-controls="MenuList"
          aria-expanded={isOpen}
        />
        <Container
          isOpen={isOpen}
          entryAnimation={entryAnimation}
          getExitAnimation={getExitAnimation}
        >
          <MenuList aria-labelledby="MenuList" role="menu">
            {items.map(Item => (
              <MenuItem>
                <Item role="menuitem" tabIndex="0" />
              </MenuItem>
            ))}
          </MenuList>
        </Container>
      </Fragment>
    )
  }
}
export default BurgerMenu
