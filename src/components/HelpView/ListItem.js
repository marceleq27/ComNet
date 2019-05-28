import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLi = styled.li`
  width: 200px;
  height: 150px;
  margin: 0;

  list-style: none;
  @media (min-width: 768px) {
    flex-basis: 49%;
    padding: 60px;
    height: 200px;
  }
  @media (min-width: 1024px) {
    flex-basis: 23%;
    padding: 40px;
  }
  &:first-of-type {
    margin-top: 50px;
    @media (min-width: 768px) {
      margin-top: 0;
    }
  }
`;
const StyledPic = styled.picture`
  img {
    display: block;
    width: 40%;
    margin: 10px auto;
  }
`;
const StyledParagraph = styled.p`
  font-weight: ${({ theme }) => theme.bold};
  font-size: 20px;
  color: ${({ theme }) => theme.white};
  text-align: center;
`;
const ListItem = ({ img, text }) => {
  return (
    <StyledLi>
      <StyledPic>
        <img src={img} alt="logos" />
      </StyledPic>
      <StyledParagraph>{text}</StyledParagraph>
    </StyledLi>
  );
};
ListItem.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default ListItem;
