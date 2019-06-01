import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title/Title';

const StyledWrapper = styled.footer`
  position: relative;
  padding: 30px 20px;
  background-color: ${({ theme }) => theme.white};
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 90%;
    height: 4px;
    bottom: 0;
    background: linear-gradient(
      50deg,
      ${({ theme }) => theme.lightblue} 50%,
      ${({ theme }) => theme.darkblue}
    );
    margin-bottom: 5px;
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
  }
`;

const StyledP = styled.p`
  position: relative;
  padding: 35px 0 0;
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
`;
const StyledParagraph = styled.p`
  line-height: 130%;
  font-size: 13px;
  padding-bottom: 20px;
`;
const StyledCopy = styled.p`
  font-size: 9px;
  padding: 5px 20px;
`;
const FooterView = () => {
  return (
    <>
      <StyledWrapper>
        <StyledTitle>COM-NET</StyledTitle>
        <StyledP>Dzierżoniów</StyledP>
        <StyledParagraph>
          58-200 ul. Wrocławska 29 <br />
          info@com-net.com.pl <br />
          +48 607 035 025
        </StyledParagraph>
      </StyledWrapper>
      <StyledCopy>&#169; Wszelkie prawa zastrzeżone</StyledCopy>
    </>
  );
};

export default FooterView;
