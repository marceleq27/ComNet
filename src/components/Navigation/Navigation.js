import React, { Component } from 'react';
import styled from 'styled-components';
import Hamburger from 'components/Hamburger/Hamburger';
import ListItems from 'components/ListItems/ListItems';

const StyledNav = styled.nav`
  z-index: 100;
  position: fixed;
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
  state = {
    isViewed: true,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY === 0) {
      this.setState({ isViewed: true });
    } else if (window.scrollY !== 0) {
      this.setState({ isViewed: false });
    }
  };

  render() {
    const { isViewed } = this.state;
    return (
      <StyledNav
        className="menu_activea"
        style={{
          display: isViewed ? 'block' : 'none',
          opacity: isViewed ? '1' : '0',
          transition: isViewed ? '0.4s' : '0.4s',
        }}
      >
        <Hamburger />
        <ListItems />
      </StyledNav>
    );
  }
}

export default Navigation;
