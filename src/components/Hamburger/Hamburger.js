import React, { Component } from 'react';
import styled from 'styled-components';
import 'components/Hamburger/hamburgers.min.css';
import 'components/Hamburger/hamburger.css';
import hamburgerIcon from 'assets/hamburger.png';

const StyledHamburger = styled.span`
  img {
    max-width: 100%;
    display: block;
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
  }
`;
class Hamburger extends Component {
  state = {
    isActiveNav: false,
  };

  handleChange = () => {
    const { isActiveNav } = this.state;
    this.setState({
      isActiveNav: !isActiveNav,
    });
    const nav = document.querySelector('nav');
    nav.classList.toggle('menu-active');
  };

  render() {
    const { isActiveNav } = this.state;
    return (
      <button
        onClick={this.handleChange}
        className="hamburger hamburger--spin js-hamburger"
        type="button"
      >
        <StyledHamburger className={isActiveNav ? 'is-active hamburger-box' : 'hamburger-box'}>
          <img src={hamburgerIcon} alt="hamburger" />
        </StyledHamburger>
      </button>
    );
  }
}
export default Hamburger;
