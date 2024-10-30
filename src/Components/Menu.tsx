// Header.tsx
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import useNavigationHook from "../hooks/useNavigationHook";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #2D393D;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const Nav = styled.nav`
  display: flex;;
  flex-direction: column;
  gap: 80px;
  position: relative; /* Necessário para o pseudo-elemento */
`;

const NavItem = styled.a`
  position: relative;
  text-decoration: none; /* Remove a decoração padrão */
  padding: 10px 0; /* Espaçamento em cima e embaixo */
  color: #fff; /* Ajuste a cor conforme necessário */

  &:hover
  {
    color: #ff6f61; /* Ajuste a cor conforme necessário */
    cursor: pointer; /* Muda o cursor do mouse */
  }
`;

const Menu = () => {
  const navigate = useNavigationHook();

  return (
    <HeaderWrapper>
      <Logo src={logo} alt="VitalMap Logo" />
      <Nav>
        <NavItem onClick={() => navigate.goTo('/')}>About</NavItem>
        <NavItem onClick={() => navigate.goTo('/dashboard')}>Dashboard</NavItem>
        <NavItem onClick={() => navigate.goTo('/info')}>Informações</NavItem>
        <NavItem href="/features">Features</NavItem>
        <NavItem href="/news">News</NavItem>
        <NavItem href="/menu">☰</NavItem>
      </Nav>
    </HeaderWrapper>
  );
};

export default Menu;
