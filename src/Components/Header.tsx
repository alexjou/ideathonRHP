// Header.tsx
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.212);
`;

const Logo = styled.img`
  height: 50px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 80px;
  position: relative; /* Necessário para o pseudo-elemento */
`;

const NavItem = styled.a`
  position: relative;
  text-decoration: none; /* Remove a decoração padrão */
  padding: 10px 0; /* Espaçamento em cima e embaixo */
  color: #fff; /* Ajuste a cor conforme necessário */

  &.active::after {
    content: '';
    position: absolute;
    left: -10px; /* Ajuste a posição à esquerda */
    right: -10px; /* Ajuste a posição à direita */
    bottom: 10px; /* Distância da linha até o texto */
    height: 2px; /* Altura da linha */
    background-color: #fff; /* Cor da linha */
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="VitalMap Logo" />
      <Nav>
        <NavItem className="active" href="#about">About</NavItem>
        <NavItem href="#product">Product</NavItem>
        <NavItem href="#features">Features</NavItem>
        <NavItem href="#news">News</NavItem>
        <NavItem href="#menu">☰</NavItem>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
