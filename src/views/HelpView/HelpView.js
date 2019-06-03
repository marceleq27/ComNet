import React, { Component } from 'react';
import styled from 'styled-components';
import ListItem from 'views/HelpView/ListItem';
import data from 'utils/data';
import img from 'assets/DoGradMob.png';
import img1 from 'assets/DoGrad.png';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import 'views/HelpView/picture.css';

const StyledWrapper = styled.section`
  position: relative;
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 25px 0;
  background: linear-gradient(
    89deg,
    ${({ theme }) => theme.lightblue} 10%,
    ${({ theme }) => theme.darkblue}
  );
  @media (min-width: 768px) {
    margin-top: 150px;
  }
  @media (min-width: 1024px) {
    margin-top: 280px;
  }
  h2 {
    text-align: center;
    width: 100%;
    color: ${({ theme }) => theme.white};
    font-size: 30px;
    position: relative;
    padding: 50px 0 20px;
    @media (min-width: 768px) {
      margin: 20px 0;
      font-size: 35px;
      padding-top: 20px;
    }
    @media (min-width: 1024px) {
      margin: 50px 0;
      font-size: 40px;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 4px;
      background: ${({ theme }) => theme.white};
      z-index: 999;
      @media (min-width: 768px) {
        width: 20%;
      }
    }
  }
`;
const StyledImg = styled.img`
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;

  /* @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 768px) {
    width: 30%;
  } */
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 0 100px;
  }
`;
configureAnchors({ offset: -60, scrollDuration: 500 });
class HelpView extends Component {
  state = {};

  render() {
    return (
      <>
        <ScrollableAnchor id="section1">
          <StyledWrapper>
            <picture>
              <StyledImg src={img} className="mob" alt="svg" />
              <StyledImg src={img1} className="des" alt="svg" />
            </picture>
            <h2>W CZYM MOŻEMY CI POMÓC?</h2>
            <Wrapper>
              {data.map(item => (
                <ListItem key={item.id} text={item.text} img={item.img} />
              ))}
            </Wrapper>
          </StyledWrapper>
        </ScrollableAnchor>
      </>
    );
  }
}

export default HelpView;
