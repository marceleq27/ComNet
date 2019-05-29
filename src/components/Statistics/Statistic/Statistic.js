import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

const animation = keyframes`
  0%{
    width:0%;
  }
  100%{
    width:${props => props.width} + "%";
  }
`;

const StyledSpan = styled.span`
  /* margin-top: ${props => props.margin}; */
  position: absolute;
  display: block;
  width: ${props => props.width};
  height: 8px;
  background: ${props => props.background};
  animation: ${animation} linear ${props => props.time};
  &::after {
    content: '${props => props.text}';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(115%, -50%);
  }
`;

const Statistic = ({ width, background, time, text }) => {
  return (
    <ScrollAnimation animateIn="fadeInLeft" animateOnce>
      <StyledSpan width={width} background={background} time={`${time}s`} text={text} />
    </ScrollAnimation>
  );
};
Statistic.propTypes = {
  width: PropTypes.string,
  background: PropTypes.string,
  time: PropTypes.number,
  text: PropTypes.string,
};
Statistic.defaultProps = {
  width: 'null',
  background: 'null',
  time: 2,
  text: 'null',
};
export default Statistic;
