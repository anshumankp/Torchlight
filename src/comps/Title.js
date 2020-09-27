import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  h1 {
    color: ${props => props.theme.colors.primary};
    font-size: 1.2rem;
    letter-spacing: 2px;
    font-weight: normal;
  }
  h2,
  p {
    text-align: center;
  }
  h2 {
    margin-top: 60px;
    font-size: 2.6rem;
  }
`;

const Title = () => {
  return (
    <Header>
      <h2>Your Pictures</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Header>
  );
};

export default Title;
