import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.pink};
  border: none;
  color: ${({ theme }) => theme.white};
  font-weight: ${({ theme }) => theme.light};
  font-size: 25px;
  font-family: 'Montserrat', sans-serif;
`;

const Button = ({ className, children }) => {
  return <StyledButton className={className}>{children}</StyledButton>;
};
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
Button.defaultProps = {
  className: 'null',
  children: 'null',
};
export default Button;
