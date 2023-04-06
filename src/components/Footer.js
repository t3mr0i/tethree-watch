import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LogoPic from '../assets/Logo.svg';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  padding: 20px 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const NavLinkStyled = styled(NavLink)`
  color: grey;
  padding-right: 5px;
  margin-right: 5px;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 14px;

  &:hover {
    color: #cccccc;
  }

  &.active {
    font-weight: bold;
    color: #333;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    padding-right: 15px;
    margin-right: 15px;
  }
`;

const SocialIcon = styled.a`
  font-size: 20px;
  color: grey;
  text-decoration: none;
  margin-left: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #cccccc;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    margin-left: 20px;
  }
`;

const FooterLogo = styled(NavLink)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: grey;
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
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
