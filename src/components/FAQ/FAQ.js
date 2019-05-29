import React, { Component } from 'react';
import styled from 'styled-components';
import Title from 'components/Title/Title';
import HidingTitle from 'components/HidingTitle/HidingTitle';

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
  }
  p {
    text-align: left;
    padding: 10px 20% 15px 0;
    font-size: 12px;
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
      <StyledWrapper>
        <StyledHidingTitle color="white">FAQ</StyledHidingTitle>
        <Title>Często zadawane pytania</Title>
        <Wrapper>
          <Card style={{ height: isActive ? '320px' : '120px', transition: '.5s' }}>
            <h4>Jaki jest koszt naprawy mojego komputera / laptopa?</h4>
            <p
              style={{
                opacity: isActive ? '1' : '0',
                transition: '.5s',
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae saepe minus nam
              corrupti commodi at explicabo fugiat asperiores, ducimus quae et aliquam culpa. Odio
              possimus earum, nobis blanditiis hic quisquam saepe corrupti illum voluptatibus
              recusandae quidem culpa minima commodi labore explicabo dolor quas consequatur eius
              tenetur adipisci ut necessitatibus aliquam?
            </p>
            <Arrow
              style={{
                height: isActive ? '320px' : '120px',
                transition: '.5s',
                background: isActive ? 'linear-gradient(150deg,#1488CC 50%,#2B32B2)' : ' #ed1c94',
              }}
            >
              <StyledButton onClick={this.handleClick}>{isActive ? '-' : '+'}</StyledButton>
            </Arrow>
          </Card>
          <Card style={{ height: isActive2 ? '320px' : '120px', transition: '.5s' }}>
            <h4>Po jakim czasie można odebrać naprawiony sprzęt?</h4>
            <p
              style={{
                opacity: isActive2 ? '1' : '0',
                transition: '.5s',
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae saepe minus nam
              corrupti commodi at explicabo fugiat asperiores, ducimus quae et aliquam culpa. Odio
              possimus earum, nobis blanditiis hic quisquam saepe corrupti illum voluptatibus
              recusandae quidem culpa minima commodi labore explicabo dolor quas consequatur eius
              tenetur adipisci ut necessitatibus aliquam?
            </p>
            <Arrow
              style={{
                height: isActive2 ? '320px' : '120px',
                transition: '.5s',
                background: isActive2 ? 'linear-gradient(150deg,#1488CC 50%,#2B32B2)' : ' #ed1c94',
              }}
            >
              <StyledButton onClick={this.handleClick2}>{isActive2 ? '-' : '+'}</StyledButton>
            </Arrow>
          </Card>
          <Card style={{ height: isActive3 ? '320px' : '120px', transition: '.5s' }}>
            <h4>Ile kosztuje zakup komputera/ laptopa w waszej firmie?</h4>
            <p
              style={{
                opacity: isActive3 ? '1' : '0',
                transition: '.5s',
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae saepe minus nam
              corrupti commodi at explicabo fugiat asperiores, ducimus quae et aliquam culpa. Odio
              possimus earum, nobis blanditiis hic quisquam saepe corrupti illum voluptatibus
              recusandae quidem culpa minima commodi labore explicabo dolor quas consequatur eius
              tenetur adipisci ut necessitatibus aliquam?
            </p>
            <Arrow
              style={{
                height: isActive3 ? '320px' : '120px',
                transition: '.5s',
                background: isActive3 ? 'linear-gradient(150deg,#1488CC 50%,#2B32B2)' : ' #ed1c94',
              }}
            >
              <StyledButton onClick={this.handleClick3}>{isActive3 ? '-' : '+'}</StyledButton>
            </Arrow>
          </Card>
          <Card style={{ height: isActive4 ? '320px' : '120px', transition: '.5s' }}>
            <h4>Jaki jest czas oczekiwania na zamówiony sprzęt?</h4>
            <p
              style={{
                opacity: isActive4 ? '1' : '0',
                transition: '.5s',
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae saepe minus nam
              corrupti commodi at explicabo fugiat asperiores, ducimus quae et aliquam culpa. Odio
              possimus earum, nobis blanditiis hic quisquam saepe corrupti illum voluptatibus
              recusandae quidem culpa minima commodi labore explicabo dolor quas consequatur eius
              tenetur adipisci ut necessitatibus aliquam?
            </p>
            <Arrow
              style={{
                height: isActive4 ? '320px' : '120px',
                transition: '.5s',
                background: isActive4 ? 'linear-gradient(150deg,#1488CC 50%,#2B32B2)' : ' #ed1c94',
              }}
            >
              <StyledButton onClick={this.handleClick4}>{isActive4 ? '-' : '+'}</StyledButton>
            </Arrow>
          </Card>
        </Wrapper>
      </StyledWrapper>
    );
  }
}

export default FAQ;
