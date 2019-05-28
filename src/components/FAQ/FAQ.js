import React, { Component } from 'react';
import styled from 'styled-components';
import Title from 'components/Title/Title';

const StyledWrapper = styled.section`
  position: relative;
  padding: 20px;
  margin-top: 20px;

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
  margin-top: 20px;
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
    padding: 10px 20% 10px 0;
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
class FAQ extends Component {
  state = { isActive: false, isActive2: false, isActive3: false, isActive4: false, opacity: '1' };
  handleClick = () => {
    this.setState({
      isActive: !this.state.isActive,
      isActive2: false,
      isActive3: false,
      isActive4: false,
    });
  };
  handleClick2 = () => {
    this.setState({
      isActive2: !this.state.isActive2,
      isActive: false,
      isActive3: false,
      isActive4: false,
    });
  };
  isActive3;
  handleClick3 = () => {
    this.setState({
      isActive3: !this.state.isActive3,
      isActive: false,
      isActive2: false,
      isActive4: false,
    });
  };
  handleClick4 = () => {
    this.setState({
      isActive4: !this.state.isActive4,
      isActive: false,
      isActive3: false,
      isActive2: false,
    });
  };
  render() {
    return (
      <StyledWrapper>
        <Title>Często zadawane pytania</Title>
        <Wrapper>
          <Card style={{ height: this.state.isActive ? '320px' : '120px', transition: '.5s' }}>
            <h4>Jaki jest koszt naprawy mojego komputera / laptopa?</h4>
            <p
              style={{
                opacity: this.state.isActive ? '1' : '0',
                transition: '.5s',
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae saepe minus nam
              corrupti commodi at explicabo fugiat asperiores, ducimus quae et aliquam culpa. Odio
              possimus earum, nobis blanditiis hic quisquam saepe corrupti illum voluptatibus
              recusandae quidem culpa minima commodi labore explicabo dolor quas consequatur eius
              tenetur adipisci ut necessitatibus aliquam?
            </p>
            <Arrow style={{ height: this.state.isActive ? '320px' : '120px', transition: '.5s' }}>
              <StyledButton onClick={this.handleClick}>
                {this.state.isActive ? '+' : '-'}
              </StyledButton>
            </Arrow>
          </Card>
          <Card style={{ height: this.state.isActive2 ? '320px' : '120px', transition: '.5s' }}>
            <h4>Po jakim czasie można odebrać naprawiony sprzęt?</h4>
            <p
              style={{
                opacity: this.state.isActive2 ? '1' : '0',
                transition: '.5s',
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae saepe minus nam
              corrupti commodi at explicabo fugiat asperiores, ducimus quae et aliquam culpa. Odio
              possimus earum, nobis blanditiis hic quisquam saepe corrupti illum voluptatibus
              recusandae quidem culpa minima commodi labore explicabo dolor quas consequatur eius
              tenetur adipisci ut necessitatibus aliquam?
            </p>
            <Arrow style={{ height: this.state.isActive2 ? '320px' : '120px', transition: '.5s' }}>
              <StyledButton onClick={this.handleClick2}>
                {this.state.isActive2 ? '+' : '-'}
              </StyledButton>
            </Arrow>
          </Card>
          <Card style={{ height: this.state.isActive3 ? '320px' : '120px', transition: '.5s' }}>
            <h4>Ile kosztuje zakup komputera/ laptopa w waszej firmie?</h4>
            <p
              style={{
                opacity: this.state.isActive3 ? '1' : '0',
                transition: '.5s',
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae saepe minus nam
              corrupti commodi at explicabo fugiat asperiores, ducimus quae et aliquam culpa. Odio
              possimus earum, nobis blanditiis hic quisquam saepe corrupti illum voluptatibus
              recusandae quidem culpa minima commodi labore explicabo dolor quas consequatur eius
              tenetur adipisci ut necessitatibus aliquam?
            </p>
            <Arrow style={{ height: this.state.isActive3 ? '320px' : '120px', transition: '.5s' }}>
              <StyledButton onClick={this.handleClick3}>
                {this.state.isActive3 ? '+' : '-'}
              </StyledButton>
            </Arrow>
          </Card>
          <Card style={{ height: this.state.isActive4 ? '320px' : '120px', transition: '.5s' }}>
            <h4>Jaki jest czas oczekiwania na zamówiony sprzęt?</h4>
            <p
              style={{
                opacity: this.state.isActive4 ? '1' : '0',
                transition: '.5s',
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae saepe minus nam
              corrupti commodi at explicabo fugiat asperiores, ducimus quae et aliquam culpa. Odio
              possimus earum, nobis blanditiis hic quisquam saepe corrupti illum voluptatibus
              recusandae quidem culpa minima commodi labore explicabo dolor quas consequatur eius
              tenetur adipisci ut necessitatibus aliquam?
            </p>
            <Arrow style={{ height: this.state.isActive4 ? '320px' : '120px', transition: '.5s' }}>
              <StyledButton onClick={this.handleClick4}>
                {this.state.isActive4 ? '+' : '-'}
              </StyledButton>
            </Arrow>
          </Card>
        </Wrapper>
      </StyledWrapper>
    );
  }
}

export default FAQ;
