import React from 'react';
import LeitoStatus from '../../Components/LeitoStatus';
import { ContentWrapper, TextSection, ImagesSection } from './styles';


function About() {

  return (
    <>
      <ContentWrapper>
        <TextSection>
          <h1>VITAL MAP</h1>
          <h2>Mais controle, comunicação e eficiência para hospitais.</h2>
          <p>Nosso sistema ajuda médicos e enfermeiros a visualizarem rapidamente a disponibilidade de leitos,  facilitando decisões ágeis para um atendimento mais eficaz.</p>
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
