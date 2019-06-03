import React from 'react';
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

const ListItems = () => {
  return (
    <ul style={{ margin: 0, padding: 0 }}>
      <a href="#home">
        <StyledLi>HOME</StyledLi>
      </a>
      <a href="#history">
        <StyledLi>NASZA HISTORIA</StyledLi>
      </a>
      <a href="#section1">
        <StyledLi>OFERTA</StyledLi>
      </a>
      <a href="#statistics">
        <StyledLi>STATYSTYKI</StyledLi>
      </a>
      <a href="#FAQ">
        <StyledLi>FAQ</StyledLi>
      </a>
      <a href="#opinions">
        <StyledLi>OPINIE</StyledLi>
      </a>
      <a href="#contact">
        <StyledLi>KONTAKT</StyledLi>
      </a>
      <a href="#experience">
        <StyledLi>DOŚWIADCZENIE</StyledLi>
      </a>
    </ul>
  );
};

export default ListItems;
