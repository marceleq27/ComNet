import React from 'react';
import styled from 'styled-components';
import Statistics from 'components/Statistics/Statistics';
import FAQ from 'components/FAQ/FAQ';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  max-width: 1600px;
  margin: 0 auto;
  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 50px;
  }
`;
const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.white};
  width: 100vw;
`;
const StaticticsFAQView = () => {
  return (
    <Wrapper>
      <StyledWrapper>
        <Statistics />
        <FAQ />
      </StyledWrapper>
    </Wrapper>
  );
};

export default StaticticsFAQView;
