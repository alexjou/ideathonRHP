// Header.tsx
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo1.png';
import IconHome from '../assets/home.png';
import IconDashboard from '../assets/bed.png';
import IconUser from '../assets/user.png';
import IconInfo from '../assets/info.png';
import IconSetting from '../assets/settings.png';
import IconExit from '../assets/exit.png';
import useNavigationHook from "../hooks/useNavigationHook";


const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #F1FAF9;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 60px;
  margin-bottom: 60px;
`;

const Nav = styled.nav`
  display: flex;;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  gap: 80px;
  width: 100%;
  height: 100%;
  position: relative; /* Necessário para o pseudo-elemento */

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
  }
`;

const NavItem = styled.a`
  width: 100%;
  position: relative;
  padding: 8px;
  padding-right: 25px;
  border-radius: 20px 0 0 20px;

  &:hover
  {
    background-color: #006035; /* Ajuste a cor conforme necessário */
    cursor: pointer; /* Muda o cursor do mouse */
  }
`;

const IconMenu = styled.img`
  width: 100%;
  width: 25px;
  height: 25px;
  margin: 15px 5px;
`;

const Menu = () => {
  const navigate = useNavigationHook();

  return (
    <HeaderWrapper className='logo-click'>
      <Logo src={logo} alt="VitalMap Logo" />
      <Nav>
        <div>
          <NavItem onClick={() => navigate.goTo('/')}>
            <IconMenu src={IconHome} alt="page-Home" />
          </NavItem>
          <NavItem onClick={() => navigate.goTo('/dashboard')}>
            <IconMenu src={IconDashboard} alt="page- Dashboard" />
          </NavItem>
          <NavItem onClick={() => navigate.goTo('/info')}>
            <IconMenu src={IconInfo} alt="page-info" />
          </NavItem>
        </div>
        <div>
          <NavItem href="/features">
            <IconMenu src={IconUser} alt="page-info" />
          </NavItem>
          <NavItem href="/features">
            <IconMenu src={IconSetting} alt="page-info" />
          </NavItem>
          <NavItem href="/features">
            <IconMenu src={IconExit} alt="page-info" />
          </NavItem>
        </div>
      </Nav>
    </HeaderWrapper>
  );
};

export default Menu;
