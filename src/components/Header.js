import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import LogoPic from '../assets/Logo.svg';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: var(--color-background);
`;

const Logo = styled.img`
  height: 115px;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledNavLink = styled(NavLink)`
  color: var(--color-text);
  text-decoration: none;
  margin: 0 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--color-accent);
  }

  &.active {
    color: var(--color-primary);
    border-bottom: 2px solid var(--color-primary);
  }
`;

const Header = () => {


  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={LogoPic} alt="Tethree" />
      </Link>
      <NavLinks>
        <StyledNavLink exact to="/">
          Home
        </StyledNavLink>
        <StyledNavLink to="/products">Products</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink href="#contact">Contact</StyledNavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;