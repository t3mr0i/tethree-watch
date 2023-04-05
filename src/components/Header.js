import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #fff;
`;

const Logo = styled.h1`
  font-size: 32px;
  color: #333;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
  margin-left: 30px;
  font-size: 18px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Tethree</Logo>
      <NavLinks>
        <NavLink>Home</NavLink>
        <NavLink>Products</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
