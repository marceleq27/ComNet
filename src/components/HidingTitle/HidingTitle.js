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
    padding: 50px 0 50px 20px;
    font-weight: ${({ theme }) => theme.bold};
    font-size: 170px;
    color: ${props => props.color};
    z-index: -1;
    text-align: left;
    letter-spacing: 30px;
  }
  @media (min-width: 1400px) {
    font-size: 200px;
  }
`;

const HidingTitle = ({ children, color, className }) => {
  return (
    <StyledTitle color={color} className={className}>
      {children}
    </StyledTitle>
  );
};
HidingTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  color: PropTypes.string,
  className: PropTypes.string,
};

HidingTitle.defaultProps = {
  children: null,
  color: '#ECECF9',
  className: 'null',
};
export default HidingTitle;
