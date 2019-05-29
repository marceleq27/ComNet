import React from 'react';
import styled from 'styled-components';
import About from 'components/About/About';

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 50px;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const ContactAboutView = () => {
  return (
    <StyledWrapper>
      <About />
    </StyledWrapper>
  );
};

export default ContactAboutView;
