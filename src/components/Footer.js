import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const FooterContainer = styled.footer`
  /* ... */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  padding: 20px 0;
`;

const NavLinkStyled = styled(NavLink)`
  /* ... common styles ... */
  color: grey;
  padding-right: 5px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #cccccc;
  }

  &.active {
    /* Add styles for the active NavLink */
    font-weight: bold;
    color: #ffffff;
  }

  ${({ footer }) =>
    footer &&
    `
    color: #333;
    margin: 0 15px;

    &:hover {
      color: #666;
    }

    &.active {
      color: #333;
    }
  `}
`;

const FooterLogo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const FooterNav = styled.nav`
  display: flex;
`;

const FooterLink = styled.a`
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
  &:hover {
    color: #999;
  }
`;

const SocialMedia = styled.div`
  display: flex;
`;

const SocialIcon = styled.a`
  font-size: 24px;
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
  &:hover {
    color: #999;
  }
`;

const Footer = () => {
    return (
      <FooterContainer>
        <NavLinkStyled to="/impressum" activeClassName="active">
          Impressum
        </NavLinkStyled>
        <NavLinkStyled to="/datenschutz" activeClassName="active">
          Datenschutz
        </NavLinkStyled>
      </FooterContainer>
    );
  };

export default Footer;