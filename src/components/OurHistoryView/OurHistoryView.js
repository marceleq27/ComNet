import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';
import Button from 'components/Button/Button';
import img from 'assets/computer.png';
import Title from 'components/Title/Title';
import HidingTitle from 'components/HidingTitle/HidingTitle';

const StyledWrapper = styled.section`
  margin-top: 5%;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  height: 100%;
  @media (min-width: 768px) {
    padding: 100px;
  }
  @media (min-width: 1024px) {
    flex-basis: 50%;
    flex-grow: 2;
    padding: 50px;
  }
  .route-wrapper {
    position: relative;
    font-size: 14px;
    font-weight: ${({ theme }) => theme.regular};
    width: 100%;
    padding: 20px 20px 20px 0;
    padding-top: 30px;
    text-align: left;
    height: 100%;
    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }

  .route-wrapper > div {
    position: absolute;
  }
`;
const StyledUl = styled.ul`
  width: 100%;
  padding: 25px 0 10px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background: #333;
    position: absolute;
    bottom: 0;
  }
  li {
    a {
      text-decoration: none;
      color: #000;
      position: relative;
      transition: 0.3s linear;
      font-size: 13px;
      @media (min-width: 360px) {
        font-size: 16px;
      }
      @media (min-width: 1024px) {
        font-size: 20px;
      }
    }
  }
  .active {
    background: -webkit-linear-gradient(
      50deg,
      ${({ theme }) => theme.lightblue} 50%,
      ${({ theme }) => theme.darkblue}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: 0.2s;
    &::after {
      content: '';
      position: absolute;
      height: 3px;
      width: 100%;
      background: linear-gradient(
        50deg,
        ${({ theme }) => theme.lightblue} 50%,
        ${({ theme }) => theme.darkblue}
      );
      z-index: 5;
      bottom: -12px;
      left: 0;
    }
  }
`;
const SecondaryButton = styled(Button)`
  position: absolute;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.pink};
  border: 1px solid ${({ theme }) => theme.pink};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.regular};
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 150%);
  transition: 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.pink};
    color: ${({ theme }) => theme.white};
  }
`;
const StyledPicture = styled.picture`
  @media (min-width: 1024px) {
    flex-basis: 50%;
    margin-top: 10%;
    flex-grow: 1;
  }
  img {
    width: 70%;
    height: auto;
    display: block;
    margin: 0 auto;
    position: relative;
    opacity: 0.2;
    z-index: -5;
    @media (min-width: 1024px) {
      opacity: 1;
    }
  }
`;

function przeglad() {
  const StyledRelative = styled.div`
    position: relative;
  `;
  return (
    <StyledRelative>
      <b>Nasza firma działa na rynku już ponad 20 lat.</b> <br /> <br /> Każdy komputer zamówiony u
      nas spełnia wymagania swojego przyszłego właściciela. Począwszy od ceny, a kończąc na
      podzespołach i peryferiach. Podczas rozmowy w naszym salonie otrzymujesz fachowe doradztwo,
      żeby idealnie dobrać podzespoły do Twojej przyszłej maszyny. <br /> <br /> W ofercie mamy
      podzespoły wszystkich liderów rynku komputerowego. Udzielamy nawet 10 letniej gwarancji na
      sprzęt. <br /> <br /> Od podjęcia decyzji do odbioru swojej wymarzonej maszyny czekasz
      zazwyczaj jeden dzień roboczy. Komputer odbierasz w pełni skonfigurowany. Montaż i
      konfiguracja podzespołów gratis.
      <SecondaryButton>Sprawdź więcej</SecondaryButton>
    </StyledRelative>
  );
}
function informacje() {
  const StyledRelative = styled.div`
    position: relative;
  `;
  return (
    <StyledRelative>
      <b>Nasza siedziba znajduje się w Dzierżoniowie</b>
      <br /> <br />
      Ponad 20 lat praktyki w składaniu komputerów jest umiejętnością, którą ceni każdy klient.
      Nawet Ci najbardziej wymagający wychodzą od nas z uśmiechem na ustach zadowoleni z podjętych
      decyzji i dokonanego zakupu.
      <br /> <br /> Strony internetowe które piszemy stawiają na przejżystość, są responsywne
      (mobile-friendly) i znakomicie zaprojektowane.
      <br /> <br /> Jeżeli jesteś klientem stawiającym na jakość wykonania i nie masz ochoty na
      późniejsze serwisowanie źle złożonego komputera to trafiłeś w idealne miejsce. Zapraszamy do
      naszego salonu!
      <SecondaryButton>Sprawdź więcej</SecondaryButton>
    </StyledRelative>
  );
}
function naszewartosci() {
  const StyledRelative = styled.div`
    position: relative;
  `;
  return (
    <StyledRelative>
      <b>Cenimy przede wszystkim Twój indywidualizm</b> <br /> <br />
      Wszystko u nas jest robione specjalnie dla Ciebie, ponieważ bez zadowolonego klienta nie
      istnieje dobrze prosperująca firma. Nie odpuścimy póki nie spełnimy Twoich oczekiwań i z
      przyjemnością doradzimy, jaki komputer będzie dla Ciebie najlepszym wyborem.
      <br /> <br /> Profesjonalizm jest u nas również w cenie. Do każdego zadania które nam
      powierzysz przykładamy się w 100% i wkładamy w nie całe serce.
      <br /> <br /> Każde zlecenie które nam powierzysz to twoje zaufanie do nas. Staramy się
      najmocniej jak możemy, aby tego zaufania nie stracić. Każdy krok który musimy podjąć bez
      Twojej obecności u nas jest wpierw konsultowany z Tobą.
      <SecondaryButton>Sprawdź więcej</SecondaryButton>
    </StyledRelative>
  );
}
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.5,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};
const Wrapper = styled.section`
  max-width: 1600px;
  margin: 0 auto;
  @media (min-width: 1024px) {
    display: flex;
  }
`;
const OurHistoryView = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Wrapper>
        <HidingTitle color="#ECECF9">O NAS</HidingTitle>
        <StyledWrapper>
          <Title>Nasza historia</Title>
          <StyledUl>
            <li>
              <NavLink to="/" exact activeClassName="active">
                Przegląd
              </NavLink>
            </li>
            <li>
              <NavLink to="/informacje" activeClassName="active">
                Informacje
              </NavLink>
            </li>
            <li>
              <NavLink to="/naszewartosci" activeClassName="active">
                Nasze wartości
              </NavLink>
            </li>
          </StyledUl>
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className="route-wrapper"
          >
            <Route path="/" exact component={przeglad} />
            <Route path="/informacje" component={informacje} />
            <Route path="/naszewartosci" component={naszewartosci} />
          </AnimatedSwitch>
        </StyledWrapper>
        <StyledPicture>
          <img src={img} alt="komputer" />
        </StyledPicture>
      </Wrapper>
    </Router>
  );
};

export default OurHistoryView;
