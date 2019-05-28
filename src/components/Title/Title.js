import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledH2 = styled.h2`
  font-size: 30px;
  position: relative;
  @media (min-width: 1024px) {
    padding: 30px 0;
    font-size: 40px;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 35%;
    height: 4px;
    background: linear-gradient(
      50deg,
      ${({ theme }) => theme.lightblue} 50%,
      ${({ theme }) => theme.darkblue}
    );
    margin-left: 2px;
    margin-top: 2px;
  }
`;

const Title = ({ children }) => {
  return <StyledH2>{children}</StyledH2>;
};
Title.propTypes = {
  children: PropTypes.string,
};

Title.defaultProps = {
  children: null,
};
export default Title;
