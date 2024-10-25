import React from 'react';
import Header from './Components/Header';
import LeitoStatus from './Components/LeitoStatus';
import { PageWrapper, ContentWrapper, TextSection, ImagesSection } from './Styles/LandingPageStyles';
import backgroundImage from './assets/LandingPage.png';

function App() {

  return (
    <PageWrapper backgroundImage={backgroundImage}>
      <Header />
      <ContentWrapper>
        <TextSection>
          <h1>VITAL MAP</h1>
          <h2>Com a VitalMap você tem um problema a menos para se preocupar!</h2>
          <button>Saiba mais</button>
        </TextSection>
        <ImagesSection>
          <LeitoStatus />
        </ImagesSection>
      </ContentWrapper>
    </PageWrapper>
  );
}

export default App;
