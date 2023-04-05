import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 20px 40px;
  color: #fff;
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

const Footer = () => (
  <FooterContainer>
    <FooterLogo>Tethree</FooterLogo>
    <FooterNav>
      <FooterLink href="#privacy">Privacy Policy</FooterLink>
      <FooterLink href="#terms">Terms of Service</FooterLink>
    </FooterNav>
    <SocialMedia>
      <SocialIcon href="https://www.facebook.com/tethree" target="_blank" rel="noopener noreferrer">Facebook</SocialIcon>
      <SocialIcon href="https://www.instagram.com/teth
ree" target="_blank" rel="noopener noreferrer">Instagram</SocialIcon>
<SocialIcon href="https://www.twitter.com/tethree" target="_blank" rel="noopener noreferrer">Twitter</SocialIcon>
</SocialMedia>
</FooterContainer>
);

export default Footer;