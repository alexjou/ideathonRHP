import React from 'react';
import Menu from './Components/Menu';
import { PageWrapper } from './Pages/About/styles';
import AppRoutes from './Routes';

export default function App() {

  return (
    <PageWrapper>
      <Menu />
      <AppRoutes />
    </PageWrapper>
  );
}
