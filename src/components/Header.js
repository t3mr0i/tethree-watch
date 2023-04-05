import React from 'react';
import styled from 'styled-components';
import LogoPic from '../assets/Logo.svg';
import { animateScroll as scroll } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';

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

const StyledNavLink = styled.a`
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
    <HeaderContainer data-scroll="top">
      <a href="/" onClick={() => scroll.scrollToTop()}>
        <Logo src={LogoPic} alt="Tethree" />
      </a>
      <NavLinks>
        <StyledNavLink as={ScrollLink} to="products" smooth={true} duration={500}>
          Products
        </StyledNavLink>
        <StyledNavLink as={ScrollLink} to="about" smooth={true} duration={500}>
          About
        </StyledNavLink>
        <StyledNavLink as={ScrollLink} to="contact" smooth={true} duration={500}>
          Contact
        </StyledNavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;