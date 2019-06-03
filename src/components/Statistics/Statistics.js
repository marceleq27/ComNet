import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title/Title';
import Statistic from 'components/Statistics/Statistic/Statistic';
import ScrollableAnchor from 'react-scrollable-anchor';

const StyledWrapper = styled.section`
  position: relative;
  padding: 20px 5% 0 15px;
  width: 85%;
  @media (min-width: 1024px) {
    flex-basis: 50%;
  }
  p {
    font-size: 8px;
    padding: 10px 0;
    width: 100%;
  }
`;
const Wrapper = styled.div`
  margin-top: 40px;
  font-size: 23px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;

  div {
    margin: 10px 0;
    position: relative;
    font-weight: ${({ theme }) => theme.bold};
    font-size: 13px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-around;
  }
`;
const StyledTitle = styled(Title)`
  &::after {
    width: 20%;
  }
`;
const Statistics = () => {
  return (
    <ScrollableAnchor id="statistics">
      <StyledWrapper>
        <StyledTitle>Statystyki</StyledTitle>

        <Wrapper>
          <h4>Serwis</h4>
          <div>
            Zadowolenie klientów
            <Statistic
              width={`${100}%`}
              background="linear-gradient(150deg, #38ef7d 50%, #11998e)"
              time={1}
              text="100%"
            />
          </div>
          <div>
            Skuteczność napraw
            <Statistic
              width={`${98}%`}
              background="linear-gradient(150deg, #38ef7d 50%, #11998e)"
              text="98%"
            />
          </div>
          <div>
            Jednodniowy termin naprawy
            <Statistic
              width={`${72}%`}
              background="linear-gradient(150deg, #38ef7d 50%, #11998e)"
              time={1.2}
              text="72%"
            />
          </div>
        </Wrapper>
        <Wrapper>
          <h4>Zakupiony sprzęt</h4>
          <div>
            Jakość złożenia{' '}
            <Statistic
              width={`${100}%`}
              background="linear-gradient(120deg,#8F94FB 50%,#4E54C8)"
              text="100%"
            />
          </div>
          <div>
            Bezawaryjność{' '}
            <Statistic
              width={`${99}%`}
              background="linear-gradient(120deg,#8F94FB 50%,#4E54C8)"
              text="99%"
            />
          </div>
          <div>
            Aktualność komponentów{' '}
            <Statistic
              width={`${96}%`}
              background="linear-gradient(120deg,#8F94FB 50%,#4E54C8)"
              time={1.2}
              text="96%"
            />
          </div>
        </Wrapper>
        <Wrapper>
          <h4>Nasza kadra*</h4>
          <div>
            Lata doświadczenia{' '}
            <Statistic
              width={`${100}%`}
              background="linear-gradient(120deg,#BD3F32 50%,#CB356B)"
              text="x 8.0"
            />
            <Statistic
              width={`${15}%`}
              background="linear-gradient(120deg,#999 50%,#555)"
              text=""
            />
          </div>
          <div>
            Zaangażowanie{' '}
            <Statistic
              width={`${100}%`}
              background="linear-gradient(120deg,#BD3F32 50%,#CB356B)"
              time={1.2}
              text="x 4.0"
            />
            <Statistic
              width={`${25}%`}
              background="linear-gradient(120deg,#999 50%,#555)"
              text=""
            />
          </div>
        </Wrapper>
        <Wrapper>
          <h4>Nasza firma**</h4>
          <div>
            Lata na rynku{' '}
            <Statistic
              width={`${100}%`}
              background="linear-gradient(120deg,#FDC830 50%,#F37335)"
              time={1.1}
              text="x 2.5"
            />
            <Statistic
              width={`${40}%`}
              background="linear-gradient(120deg,#999 50%,#555)"
              text=""
            />
          </div>
          <div>
            Pozytywne opinie{' '}
            <Statistic
              width={`${100}%`}
              background="linear-gradient(120deg,#FDC830 50%,#F37335)"
              text="x 2.0"
            />
            <Statistic
              width={`${50}%`}
              background="linear-gradient(120deg,#999 50%,#555)"
              text=""
            />
          </div>
        </Wrapper>
        <p>
          * W porównaniu do przeciętnego pracownika marketu <br />
          ** W porównaniu do większości serwisów komputerowych w województwie dolnośląskim
        </p>
      </StyledWrapper>
    </ScrollableAnchor>
  );
};

export default Statistics;
