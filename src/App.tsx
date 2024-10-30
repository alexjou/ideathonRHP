import React from 'react';
import Menu from './Components/Menu';
import { PageWrapper } from './Styles/LandingPageStyles';
import AppRoutes from './Routes';

export default function App() {

  return (
    <PageWrapper>
      <Menu />
      <AppRoutes />
    </PageWrapper>
  );
}
