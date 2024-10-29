import React from 'react';
import LeitoStatus from '../../Components/LeitoStatus';
import { ContentWrapper, TextSection, ImagesSection } from '../../Styles/LandingPageStyles';


function About() {

  return (
    <>
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
    </>
  );
}

export default About;
