import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTitle = styled.h3`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    position: absolute;
    height: 300px;
    width: 75vw;
    padding: 50px;
    font-weight: ${({ theme }) => theme.bold};
    font-size: 170px;
    color: #eee;
    z-index: -5;
    text-align: left;
  }
  @media (min-width: 1400px) {
    font-size: 240px;
  }
`;

const HidingTitle = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};
HidingTitle.propTypes = {
  children: PropTypes.string,
};

HidingTitle.defaultProps = {
  children: null,
};
export default HidingTitle;
