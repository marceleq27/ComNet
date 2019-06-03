import React, { Component } from 'react';
import styled from 'styled-components';
import Hamburger from 'components/Hamburger/Hamburger';
import ListItems from 'components/ListItems/ListItems';

const StyledNav = styled.nav`
  z-index: 100;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 16em;
  background-color: #353441;
  transform: translateX(16em);
  transition: transform 150ms ease-out;
  z-index: 9999;
  &.menu-active {
    transform: translateX(0);
  }
  &.menu-hover {
    transform: translateX(15em);
  }
`;

class Navigation extends Component {
  state = {};

  render() {
    return (
      <StyledNav className="menu_activea">
        <Hamburger />
        <ListItems />
      </StyledNav>
    );
  }
}

export default Navigation;
