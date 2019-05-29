import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title/Title';

const Wrapper = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-around;
  flex-direction: column;
  position: relative;
  padding: 20px;
  margin-top: 20px;
  @media (min-width: 1024px) {
    flex-basis: 50%;
  }
`;
const Card = styled.div`
  position: relative;
  height: 120px;
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px 10px;
  box-shadow: 0 5px 12px 0 #dcdeec;
  margin: 45px 0 0;
`;

const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: -1px;
  left: -1px;
  z-index: 2;
  width: 15px;
  background: #ed1c94;
  border-radius: 10px 0 0 10px;
`;
const StyledParagraph = styled.p`
  font-size: 10px;
  font-weight: ${({ theme }) => theme.bold};
  margin-left: 5px;
  text-align: left;
  @media (min-width: 1024px) {
    font-size: 13px;
  }
`;

const StyledName = styled.p`
  position: absolute;
  bottom: 10px;
  right: 15px;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.bold};
  background: linear-gradient(
    150deg,
    ${({ theme }) => theme.lightblue} 50%,
    ${({ theme }) => theme.darkblue}
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (min-width: 1024px) {
    font-size: 15px;
  }
`;
const About = () => {
  return (
    <Wrapper className="contact">
      <Title>Co o nas mówią</Title>
      <Card>
        <StyledParagraph>
          Szybko i profesjonalnie, co najważniejsze bez zbędnego oczekiwania. Jedyne miejsce gdzie
          można porozmawiać z kimś, kto ma wiedzę na temat mocnych gamingowych komputerów i potrafi
          dużo doradzić.
        </StyledParagraph>
        <StyledName>Daniel M.</StyledName>
        <Arrow />
      </Card>
      <Card>
        <StyledParagraph>
          Polecam. Bardzo miła obsługa i kompetentnie wykwalifikowani pracownicy. Jeśli ktoś
          potrzebuje naprawić bądź nabyć informację na temat swojego sprzętu powinien udać się
          właśnie tu.
        </StyledParagraph>
        <StyledName>Sebastian B.</StyledName>
        <Arrow />
      </Card>
      <Card>
        <StyledParagraph>
          Fachowo, a co najważniejsze szybko. Usterka usunięta w ciągu paru godzin, wszystko hula.
          Polecam. Dodam jeszcze, że jest to już mój kolejny kontakt z tą firmą na przestrzeni kilku
          lat i za każdym razem jestem zadowolony.
        </StyledParagraph>
        <StyledName>Andrzej P.</StyledName>
        <Arrow />
      </Card>
    </Wrapper>
  );
};

export default About;
