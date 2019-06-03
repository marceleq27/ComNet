import React, { Component } from 'react';
import './listitems.css';
import styled from 'styled-components';

const StyledLi = styled.li`
  display: inline-block;
  padding: 0 1em;
  width: 100%;
  height: 60px;
  color: #9dc6d1;
  line-height: 60px;
  background-color: #353441;
  transition: all 0.2s ease;
  &:nth-of-type(2n) {
    background-color: #3a3947;
  }
  &:hover {
    background: ORANGERED;
    color: white;
  }
`;

class ListItems extends Component {
  handleNavigationOff = () => {
    const nav = document.querySelector('nav');
    nav.classList.remove('menu-active');
  };

  render() {
    return (
      <ul style={{ margin: 0, padding: 0 }}>
        <a href="#home" onClick={this.handleNavigationOff}>
          <StyledLi>HOME</StyledLi>
        </a>
        <a href="#history" onClick={this.handleNavigationOff}>
          <StyledLi>NASZA HISTORIA</StyledLi>
        </a>
        <a href="#section1" onClick={this.handleNavigationOff}>
          <StyledLi>OFERTA</StyledLi>
        </a>
        <a href="#statistics" onClick={this.handleNavigationOff}>
          <StyledLi>STATYSTYKI</StyledLi>
        </a>
        <a href="#FAQ" onClick={this.handleNavigationOff}>
          <StyledLi>FAQ</StyledLi>
        </a>
        <a href="#opinions" onClick={this.handleNavigationOff}>
          <StyledLi>OPINIE</StyledLi>
        </a>
        <a href="#contact" onClick={this.handleNavigationOff}>
          <StyledLi>KONTAKT</StyledLi>
        </a>
        <a href="#experience" onClick={this.handleNavigationOff}>
          <StyledLi>DOŚWIADCZENIE</StyledLi>
        </a>
      </ul>
    );
  }
}

export default ListItems;
