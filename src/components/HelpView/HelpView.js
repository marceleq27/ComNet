import React from 'react';
import styled from 'styled-components';
import image from 'assets/Fala2.png';
import ListItem from 'components/HelpView/ListItem';
import data from 'utils/data';

const StyledWrapper = styled.section`
  position: relative;
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: auto;
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
    @media (min-width: 768px) {
      margin: 20px 0;
      font-size: 35px;
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
  transform: translateY(-98%);
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 768px) {
    width: 30%;
  }
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
const HelpView = () => {
  return (
    <StyledWrapper>
      <StyledImg src={image} alt="svg" srcSet="" />
      <h2>W CZYM MOŻEMY CI POMÓC?</h2>
      <Wrapper>
        {data.map(item => (
          <ListItem key={item.id} text={item.text} img={item.img} />
        ))}
      </Wrapper>
    </StyledWrapper>
  );
};

export default HelpView;
