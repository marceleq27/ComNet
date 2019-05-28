import React from 'react';
import styled from 'styled-components';
import Statistics from 'components/Statistics/Statistics';
import FAQ from 'components/FAQ/FAQ';

const StyledWrapper = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.white};
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 50px;
  }
`;

const StaticticsFAQView = () => {
  return (
    <StyledWrapper>
      <Statistics />
      <FAQ />
    </StyledWrapper>
  );
};

export default StaticticsFAQView;
