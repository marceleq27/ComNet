import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title/Title';

const StyledWrapper = styled.footer`
  position: relative;
  padding: 10px 20px 20px;
  background-color: ${({ theme }) => theme.white};
  z-index: 5;
`;
const Wrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 80%;
    height: 4px;
    bottom: 0;
    background: linear-gradient(
      50deg,
      ${({ theme }) => theme.lightblue} 50%,
      ${({ theme }) => theme.darkblue}
    );
    margin: 8px 0;
  }
`;
const StyledTitle = styled(Title)`
  background: linear-gradient(
    220deg,
    ${({ theme }) => theme.lightblue} 50%,
    ${({ theme }) => theme.darkblue}
  );
  font-weight: ${({ theme }) => theme.bold};
  font-size: 40px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  &::after {
    background: ${({ theme }) => theme.darkyellow};
    width: 15%;
  }
  @media (min-width: 1024px) {
    font-size: 65px;
  }
`;

const StyledP = styled.p`
  position: relative;
  padding: 30px 0 0;
  font-size: 25px;
  font-weight: ${({ theme }) => theme.regular};
  background: linear-gradient(
    220deg,
    ${({ theme }) => theme.lightblue} 50%,
    ${({ theme }) => theme.darkblue}
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (min-width: 1024px) {
    font-size: 35px;
  }
`;
const StyledParagraph = styled.p`
  line-height: 130%;
  font-size: 13px;
  padding-bottom: 20px;
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;
const StyledCopy = styled.p`
  font-size: 9px;
  padding: 10px 20px;
  max-width: 1600px;
  margin: 0 auto;
  text-align: left;
  display: block;
  @media (min-width: 1024px) {
    padding: 10px 0;
  }
`;
const Color = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.white};
  position: relative;
  z-index: 5;
`;
const StyledHidingTitle = styled.h2`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    position: absolute;
    font-size: 150px;
    z-index: -5;
    color: white;
    overflow: hidden;
    letter-spacing: 100px;
    padding-left: 50px;
    width: 60%;
    top: 0;
    left: 0;
  }
`;
const FooterView = () => {
  return (
    <>
      <StyledWrapper>
        <StyledHidingTitle color="white">COM NET</StyledHidingTitle>
        <Wrapper>
          <StyledTitle>COM-NET</StyledTitle>

          <StyledP>Dzierżoniów</StyledP>
          <StyledParagraph>
            58-200 ul. Wrocławska 29 <br />
            info@com-net.com.pl <br />
            +48 607 035 025
          </StyledParagraph>
        </Wrapper>
      </StyledWrapper>
      <Color>
        <StyledCopy>&#169; Wszelkie prawa zastrzeżone</StyledCopy>
      </Color>
    </>
  );
};

export default FooterView;
