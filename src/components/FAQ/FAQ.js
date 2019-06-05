import React, { Component } from 'react';
import styled from 'styled-components';
import Title from 'components/Title/Title';
import HidingTitle from 'components/HidingTitle/HidingTitle';
import ScrollableAnchor from 'react-scrollable-anchor';

const StyledWrapper = styled.section`
  position: relative;
  padding: 20px;
  margin-top: 20px;
  z-index: 1;

  @media (min-width: 1024px) {
    flex-basis: 50%;
    margin-top: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  padding: 10px;
  margin-top: 50px;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  height: 120px;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px 10px;
  box-shadow: 0 5px 12px 0 #dcdeec;
  margin-top: 15px;
  h4 {
    text-align: left;
    padding: 10px 21% 10px 0;
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
  p {
    text-align: left;
    padding: 10px 25% 15px 0;
    font-size: 11px;
    line-height: 140%;
    @media (min-width: 360px) {
      font-size: 12px;
    }
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
`;
const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: -1px;
  right: -1px;
  z-index: 2;
  width: 70px;
  background: #ed1c94;
  border-radius: 0 10px 10px 0;
  &:hover {
    background: linear-gradient(
      150deg,
      ${({ theme }) => theme.lightblue} 50%,
      ${({ theme }) => theme.darkblue}
    );
  }
`;
const StyledButton = styled.button`
  font-size: 35px;
  opacity: 1;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  width: 100%;
  background-color: transparent;
  border: none;
  color: #fff;
`;
const StyledHidingTitle = styled(HidingTitle)`
  transform: translateY(-40%);
  @media (min-width: 1024px) {
    font-size: 200px;
    letter-spacing: 45px;
  }
`;
class FAQ extends Component {
  state = { isActive: false, isActive2: false, isActive3: false, isActive4: false };

  handleClick = () => {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive,
      isActive2: false,
      isActive3: false,
      isActive4: false,
    });
  };

  handleClick2 = () => {
    const { isActive2 } = this.state;
    this.setState({
      isActive2: !isActive2,
      isActive: false,
      isActive3: false,
      isActive4: false,
    });
  };

  handleClick3 = () => {
    const { isActive3 } = this.state;
    this.setState({
      isActive3: !isActive3,
      isActive: false,
      isActive2: false,
      isActive4: false,
    });
  };

  handleClick4 = () => {
    const { isActive4 } = this.state;
    this.setState({
      isActive4: !isActive4,
      isActive: false,
      isActive3: false,
      isActive2: false,
    });
  };

  render() {
    const { isActive, isActive2, isActive3, isActive4 } = this.state;
    return (
      <ScrollableAnchor id="FAQ">
        <StyledWrapper>
          <StyledHidingTitle color="white">FAQ</StyledHidingTitle>
          <Title>Często zadawane pytania</Title>
          <Wrapper>
            <Card style={{ height: isActive ? '250px' : '120px', transition: '.5s' }}>
              <h4>Jaki jest koszt naprawy mojego komputera / laptopa?</h4>
              <p
                style={{
                  opacity: isActive ? '1' : '0',
                  transition: '.5s',
                }}
              >
                Koszt naprawy zależy od usterki. Przynieś do nas swój sprzęt, a zdiagnozujemy i
                wycenimy szkodę za darmo. Będziesz mógł zdecydować czy naprawiasz sprzęt u nas, czy
                zabierasz go do domu.
              </p>
              <Arrow
                style={{
                  height: isActive ? '250px' : '120px',
                  transition: '.5s',
                  background: isActive ? 'linear-gradient(150deg,#1488CC 50%,#2B32B2)' : ' #ed1c94',
                }}
              >
                <StyledButton onClick={this.handleClick}>{isActive ? '-' : '+'}</StyledButton>
              </Arrow>
            </Card>
            <Card style={{ height: isActive2 ? '240px' : '120px', transition: '.5s' }}>
              <h4>Po jakim czasie można odebrać naprawiony sprzęt?</h4>
              <p
                style={{
                  opacity: isActive2 ? '1' : '0',
                  transition: '.5s',
                }}
              >
                Uszkodzony sprzęt udaje nam się naprawić w większości przypadków w ciągu jednego
                dnia. Jeżeli wymaga to sprowadzenia części zamiennych, których aktualnie nie
                posiadamy na magazynie to zazwyczaj zajmuje nam to góra 2-3 dni robocze.
              </p>
              <Arrow
                style={{
                  height: isActive2 ? '240px' : '120px',
                  transition: '.5s',
                  background: isActive2
                    ? 'linear-gradient(150deg,#1488CC 50%,#2B32B2)'
                    : ' #ed1c94',
                }}
              >
                <StyledButton onClick={this.handleClick2}>{isActive2 ? '-' : '+'}</StyledButton>
              </Arrow>
            </Card>
            <Card style={{ height: isActive3 ? '240px' : '120px', transition: '.5s' }}>
              <h4>Ile kosztuje zakup komputera/ laptopa w waszej firmie?</h4>
              <p
                style={{
                  opacity: isActive3 ? '1' : '0',
                  transition: '.5s',
                }}
              >
                Koszt jest w pełni zależny od wymagań klienta. Doradzimy Ci którego laptopa kupić,
                lub jakie podzespoły wybrać do swojego komputera, aby nie przepłacić za części i
                zmieścić się w twoim budżecie.
              </p>
              <Arrow
                style={{
                  height: isActive3 ? '240px' : '120px',
                  transition: '.5s',
                  background: isActive3
                    ? 'linear-gradient(150deg,#1488CC 50%,#2B32B2)'
                    : ' #ed1c94',
                }}
              >
                <StyledButton onClick={this.handleClick3}>{isActive3 ? '-' : '+'}</StyledButton>
              </Arrow>
            </Card>
            <Card style={{ height: isActive4 ? '240px' : '120px', transition: '.5s' }}>
              <h4>Jaki jest czas oczekiwania na zamówiony sprzęt?</h4>
              <p
                style={{
                  opacity: isActive4 ? '1' : '0',
                  transition: '.5s',
                }}
              >
                Zamówiony sprzęt odbierasz do 2 dni roboczych, ale najczęściej już kolejnego dnia.
                Wszystko jest w pełni skonfigurowane, abyś mógł natychmiast korzystać i cieszyć się
                swoim nowym zakupem.
              </p>
              <Arrow
                style={{
                  height: isActive4 ? '240px' : '120px',
                  transition: '.5s',
                  background: isActive4
                    ? 'linear-gradient(150deg,#1488CC 50%,#2B32B2)'
                    : ' #ed1c94',
                }}
              >
                <StyledButton onClick={this.handleClick4}>{isActive4 ? '-' : '+'}</StyledButton>
              </Arrow>
            </Card>
          </Wrapper>
        </StyledWrapper>
      </ScrollableAnchor>
    );
  }
}

export default FAQ;
