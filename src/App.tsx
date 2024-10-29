import React from 'react';
import Routes from './Routes';
import Menu from './Components/Menu';
import { PageWrapper } from './Styles/LandingPageStyles';

function App() {

  return (
    <PageWrapper>
      <Menu />
      <Routes />
    </PageWrapper>
  );
}

export default App;
