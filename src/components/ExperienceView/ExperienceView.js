import React from 'react';
import styled from 'styled-components';
import img from 'assets/Fala2.png';
import heart from 'assets/Ind.png';
import people from 'assets/Kad.png';
import star from 'assets/Star.png';
import ScrollableAnchor from 'react-scrollable-anchor';

const StyledWrapper = styled.section`
  position: relative;
  margin-top: 100px;
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
const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  margin: 0 auto;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
const Wrapper = styled.div`
  margin-top: 10px;
  padding: 20px 0;
  width: 100%;
  &:nth-of-type(1) {
    margin-top: 30px;
    @media (min-width: 1024px) {
      margin-top: 10px;
    }
  }
  h3 {
    text-align: center;
    padding: 15px;
    font-size: 24px;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.darkyellow} 50%,
      ${({ theme }) => theme.lightyellow}
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    width: 100vw;
    @media (min-width: 1024px) {
      width: auto;
    }
  }
  p {
    text-align: center;
    padding: 15px 20px;
    color: white;
    font-weight: ${({ theme }) => theme.regular};
    font-size: 16px;
    line-height: 150%;
  }
  @media (min-width: 1024px) {
    flex-basis: 30%;
    flex-grow: 1;
  }
`;
const StyledPicture = styled.picture`
  img {
    display: block;
    width: 20%;
    margin: 10px auto;
    @media (min-width: 768px) {
      width: 15%;
    }
  }
`;
const ExperienceView = () => {
  return (
    <ScrollableAnchor id="experience">
      <StyledWrapper>
        <StyledImg src={img} alt="svg" />
        <h2>NASZE ATUTY</h2>
        <ExperienceWrapper>
          <Wrapper>
            <StyledPicture>
              <img src={heart} alt="heart" />
            </StyledPicture>
            <h3>Indywidualne podjeście</h3>
            <p>
              W przeciwieństwie do wielu innych firm, stosujemy indywidualne podejście do każdego
              klienta, i nigdy nie proponujemy zestawu standardowych decyzji dla Ciebie lub Twojej
              firmy.
            </p>
          </Wrapper>
          <Wrapper>
            <StyledPicture>
              <img src={people} alt="people" />
            </StyledPicture>
            <h3>Doświadczona kadra</h3>
            <p>
              Com-Net to oddana i wykwalifikowana kadra gotowa, żeby pomóc Tobie w potrzebie i
              służyć fachowym doradztwem i pomocą. Ponad 20 lat doświadczenia czyni nas ekspertami w
              swoim fachu.
            </p>
          </Wrapper>
          <Wrapper>
            <StyledPicture>
              <img src={star} alt="star" />
            </StyledPicture>
            <h3>Atrakcyjna oferta</h3>
            <p>
              Dostęp do wszystkich podzespołów i peryferiów komputerowych czołowych marek, ponad 500
              modeli laptopów to atut, którym mało która firma może się pochwalić. Wszystko to
              znajdziesz w naszym salonie.
            </p>
          </Wrapper>
        </ExperienceWrapper>
      </StyledWrapper>
    </ScrollableAnchor>
  );
};

export default ExperienceView;
