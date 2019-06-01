import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title/Title';
import time from 'assets/Time.png';
import geo from 'assets/Geo.png';
import phone from 'assets/Phone.png';
import mail from 'assets/Mail.png';

const StyledWrapper = styled.div`
  margin-top: 50px;

  @media (min-width: 1024px) {
    flex-basis: 50%;
    padding-left: 100px;
    margin-top: 20px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  &:nth-of-type(1) {
    padding-top: 40px;
  }
`;
const StyledPicture = styled.picture`
  flex-basis: 30%;
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  @media (min-width: 1024px) {
    flex-basis: 20%;
  }
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  flex-basis: 70%;
  text-align: left;
  padding-left: 35px;
  p {
    color: #aaa;
    font-size: 11px;
    padding: 5px 0;
  }
  h6 {
    padding: 10px 0;
    font-size: 13px;
  }
  @media (min-width: 1024px) {
    flex-basis: 80%;
  }
`;

const Contact = () => {
  return (
    <StyledWrapper>
      <Title>Kontakt</Title>
      <Wrapper>
        <StyledPicture>
          <img src={time} alt="time" />
        </StyledPicture>
        <Text>
          <p>Godziny kontaktu</p>
          <h6>
            Pon - Pt w godz. 9:00 - 17:00 <br />
            Sob w godz. 9:00 - 13:00
          </h6>
        </Text>
      </Wrapper>
      <Wrapper>
        <StyledPicture>
          <img src={phone} alt="phone" />
        </StyledPicture>
        <Text>
          <p>na numery telefonu</p>
          <h6>
            607 035 025 <br />
            74 645 65 00
          </h6>
        </Text>
      </Wrapper>
      <Wrapper>
        <StyledPicture>
          <img src={mail} alt="mail" />
        </StyledPicture>
        <Text>
          <p>na adresy e-mail</p>
          <h6>
            info@com-net.com.pl <br />
            ksero@com-net.com.pl
          </h6>
        </Text>
      </Wrapper>
      <Wrapper>
        <StyledPicture>
          <img src={geo} alt="geo" />
        </StyledPicture>
        <Text>
          <p>w naszej siedzibie</p>
          <h6>
            58-200 Dzierżoniów <br />
            ul. Wrocławska 29
          </h6>
        </Text>
      </Wrapper>
    </StyledWrapper>
  );
};

export default Contact;
