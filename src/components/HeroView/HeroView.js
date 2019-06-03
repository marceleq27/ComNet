import React, { Component } from 'react';
import styled from 'styled-components';
import img from 'assets/Fala.png';
import Button from 'components/Button/Button';
import ScrollableAnchor from 'react-scrollable-anchor';

const StyledHero = styled.header`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.lightblue} 10%,
    ${({ theme }) => theme.darkblue}
  );
  height: 90vh;
  width: 100vw;
  position: relative;
`;
const StyledWrapper = styled.div`
  position: relative;
  top: 30%;
  h1 {
    text-align: center;
    color: ${({ theme }) => theme.white};
    font-size: 25px;
    padding: 10px 20px 0;
    font-weight: ${({ theme }) => theme.regular};
    @media (min-width: 768px) {
      font-size: 35px;
    }
  }
`;
const StyledText = styled.p`
  font-weight: ${({ theme }) => theme.bold};
  font-size: 50px;
  color: ${({ theme }) => theme.white};
  text-align: center;
  width: 100%;
  @media (min-wdith: 360px) {
    font-size: 63px;
  }
  @media (min-width: 768px) {
    font-size: 90px;
  }
  @media (min-width: 1024px) {
    font-size: 140px;
  }
`;
const StyledPicture = styled.picture`
  position: absolute;
  top: 100%;
  transform: translateY(-100%);
  img {
    width: 100%;
    display: block;
  }
`;

const PrimaryButton = styled(Button)`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.white};
  }
  @media (min-width: 768px) {
    left: 30%;
    top: 70%;
  }
  a {
    text-decoration: none;
    color: #fff;
    &:hover {
      color: ${({ theme }) => theme.pink};
    }
  }
`;
const SecondaryButton = styled(Button)`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.pink};
    cursor: pointer;
  }
  @media (min-width: 768px) {
    left: 70%;
    top: 70%;
  }
`;

class HeroView extends Component {
  state = {};

  render() {
    return (
      <ScrollableAnchor id="home">
        <StyledHero>
          <StyledWrapper>
            <StyledText>COM - NET</StyledText>
            <h1>
              Salon komputerowy <br /> stworzony dla Ciebie
            </h1>
          </StyledWrapper>
          <StyledPicture>
            <img src={img} alt="fala" />
          </StyledPicture>
          <PrimaryButton>
            <a href="#section1">Zobacz ofertę</a>
          </PrimaryButton>
          <a href="#contact">
            <SecondaryButton>Kontakt</SecondaryButton>
          </a>
        </StyledHero>
      </ScrollableAnchor>
    );
  }
}

export default HeroView;
