import React from 'react';
import styled from 'styled-components';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Nav = styled.nav`
  max-width: 960px;
  height: auto;
  padding: 10px;
  text-align: center;
  align-items: center;
  margin: 0 auto;

  h1 {
    color: ${props => props.theme.colors.primary};
    font-size: 1.4rem;
    letter-spacing: 2px;
    font-weight: normal;
    text-align: center;
    transition: color 200ms ease-in-out;
  }

  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
  }
  li {
    list-style: none;
  }
`;

const Navbar = ({ toggleTheme, isDark }) => {
  return (
    <Nav>
      <ul>
        <li>
          <h1>TorchLight</h1>
        </li>
        <li>
          <DarkModeSwitch
            checked={isDark}
            onChange={toggleTheme}
            size={40}
            moonColor='#03dac5'
            sunColor='#efb6b2'
          />
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
