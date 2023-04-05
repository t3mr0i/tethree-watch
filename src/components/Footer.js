import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LogoPic from '../assets/Logo.svg';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;
  padding: 20px 40px;
`;

const FooterLogo = styled(NavLink)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: grey;
`;

const FooterNav = styled.nav`
  display: flex;
`;

const NavLinkStyled = styled(NavLink)`
  color: grey;
  padding-right: 5px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #cccccc;
  }

  &.active {
    font-weight: bold;
    color: #333;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.a`
  font-size: 24px;
  color: grey;
  text-decoration: none;
  margin-left: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #cccccc;
  }
`;
const FacebookIcon = styled(FaFacebook)``;
const InstagramIcon = styled(FaInstagram)``;
const TwitterIcon = styled(FaTwitter)``;

const Logo = styled.img`
  height: 115px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo to="/">
        <Logo src={LogoPic} alt="Tethree" />
      </FooterLogo>
      <FooterNav>
        <NavLinkStyled to="/impressum" activeClassName="active">
          Impressum
        </NavLinkStyled>
        <NavLinkStyled to="/datenschutz" activeClassName="active">
          Datenschutz
        </NavLinkStyled>
      </FooterNav>
      <SocialMedia>
        <SocialIcon href="https://www.facebook.com/profile.php?id=100091602729223" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com/tethree" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </SocialIcon>
        <SocialIcon href="https://www.twitter.com/tethree" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </SocialIcon>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
