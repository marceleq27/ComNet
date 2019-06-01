import React from 'react';
import styled from 'styled-components';
import About from 'components/About/About';
import Contact from 'components/Contact/Contact';

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  margin: 0 auto;
  padding: 20px;
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space;
  }
`;

const ContactAboutView = () => {
  return (
    <StyledWrapper>
      <About />
      <Contact />
    </StyledWrapper>
  );
};

export default ContactAboutView;
