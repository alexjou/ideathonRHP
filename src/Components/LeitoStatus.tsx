import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import leitosData from '../data';
import chairImageGreen from '../assets/cadeira1.png';
import chairImageYellow from '../assets/cadeira2.png';
import chairImageRed from '../assets/cadeira3.png';
import availableImage from '../assets/icon1.png';
import cleaningImage from '../assets/icon2.png';
import occupiedImage from '../assets/icon3.png';

// Definição de tipos
interface Leito {
  status: string;
  numero?: number; // Propriedade opcional
  andar: number; // Adiciona andar
  sala: number; // Adiciona sala
}

// Styled components
const LeitosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  gap: 20px;
`;

const ChairContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoBalloon = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  flex-direction: column; 
  width: 180px;
  height: 150px;
  border-radius: 20%;
  justify-content: center;
  align-items: center;
  background-color: rgba(207, 207, 207, 0.2);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const ChairImage = styled.img`
  width: 160px;
  height: 160px;
  margin-top: 10px; /* Adiciona um espaço entre o balão e a cadeira */
`;


const StatusImage = styled.img`
  width: 25px;
  height: auto;
  position: absolute;
  left: 0;
  margin-left: 20px;
`;

// Componentes de texto
const StatusText = styled.p`
  text-align: center;
`;

const LeitoText = styled.p`
  text-align: center;
color: #000;
font-weight: bold;
`;

const StyledContainer = styled.div`
  background-color: #3A4A48;
  padding: 5px;
  margin-left: 10px;
  border-radius: 20px;
  width: 80%;
  flex-direction: row;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const LeitoStatus = () => {
  const generateLeitosData = () => {
    const leitos: Leito[] = [];
    const totalLeitosCount = 800; // Total desejado de leitos

    // Definindo a quantidade de leitos por status
    const statusCounts = {
      Livre: 400,
      Higienização: 300,
      Ocupado: 100,
    };

    // Enquanto o número total de leitos gerados for menor que o desejado
    while (leitos.length < totalLeitosCount) {
      // Gera um andar e sala aleatoriamente
      const andar = Math.floor(Math.random() * 4) + 1; // Andares de 1 a 4
      const sala = Math.floor(Math.random() * 15) + 1; // Salas de 1 a 15

      let status = '';

      // Lógica para definir o status do leito baseado nas contagens
      if (statusCounts.Livre > 0) {
        status = 'Livre';
        statusCounts.Livre--;
      } else if (statusCounts.Higienização > 0) {
        status = 'Higienização';
        statusCounts.Higienização--;
      } else if (statusCounts.Ocupado > 0) {
        status = 'Ocupado';
        statusCounts.Ocupado--;
      }

      leitos.push({
        status: status,
        andar: andar,
        sala: sala,
      });
    }

    // Garante que exatamente 800 leitos foram gerados
    if (leitos.length !== totalLeitosCount) {
      throw new Error(`Número de leitos gerados não corresponde a ${totalLeitosCount}. Gerado: ${leitos.length}`);
    }

    return leitos;
  };

  const leitosData = generateLeitosData();
  const [leitos, setLeitos] = useState<Leito[]>(leitosData);
  const [lastUpdated, setLastUpdated] = useState<{ livre?: number; higienizacao?: number; ocupado?: number }>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setLeitos((prevLeitos) => {
        const newLeitos = [...prevLeitos];
        const randomLeitoIndex = Math.floor(Math.random() * newLeitos.length);
        const statusIndex = Math.floor(Math.random() * 3);
        const updatedLeito = newLeitos[randomLeitoIndex];

        // Randomiza o andar e a sala
        const andar = Math.floor(Math.random() * 4) + 1; // Andares de 1 a 4
        const sala = Math.floor(Math.random() * 15) + 1; // Salas de 1 a 15

        updatedLeito.status = ['Livre', 'higienizacao', 'Ocupado'][statusIndex];
        updatedLeito.numero = randomLeitoIndex + 1; // Para mostrar o número do leito
        updatedLeito.andar = andar; // Atribui o andar
        updatedLeito.sala = sala; // Atribui a sala

        setLastUpdated((prev) => ({
          ...prev,
          [updatedLeito.status.toLowerCase()]: updatedLeito.numero,
        }));

        return newLeitos;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const statuses = [
    { label: 'crítico', color: 'red' },
    { label: 'estável', color: 'orange' },
    { label: 'recuperando', color: 'green' },
  ];


  const leitosCount = {
    Livre: leitos.filter((leito) => leito.status === 'Livre').length,
    Higienização: leitos.filter((leito) => leito.status === 'higienizacao').length,
    Ocupado: leitos.filter((leito) => leito.status === 'Ocupado').length,
  };

  // Lista de estados do paciente
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

  return (
    <LeitosWrapper>
      <ChairContainer style={{ position: 'absolute', top: 380, right: 500 }}>
        <InfoBalloon>
          <div style={{ backgroundColor: '#14C871', padding: 7, borderRadius: 20, width: '90%' }}>
            <LeitoText>LEITO {lastUpdated.livre}</LeitoText>
          </div>

          <StyledContainer>
            <StatusImage src={availableImage} alt="Livre" />
            <StatusText style={{ color: '#14C871', fontSize: 14 }}>Livre: {leitosCount.Livre}</StatusText>
          </StyledContainer>

          <StyledContainer style={{ width: '90%', marginLeft: 0 }}>
            <StatusText style={{ fontSize: 12, color: '#909B97' }}>{leitos.find(leito => leito.numero === lastUpdated.livre)?.andar}º andar - Sala {leitos.find(leito => leito.numero === lastUpdated.livre)?.sala}</StatusText>
          </StyledContainer>
        </InfoBalloon>
        <ChairImage src={chairImageGreen} alt="Cadeira Livre" />
      </ChairContainer>

      <ChairContainer style={{ position: 'absolute', top: 460, right: 350 }}>
        <ChairImage src={chairImageYellow} alt="Cadeira em Higienização" />
        <InfoBalloon style={{ height: 200 }}>
          <div style={{ backgroundColor: '#E5C281', padding: 7, borderRadius: 20, width: '90%' }}>
            <LeitoText>LEITO {lastUpdated.higienizacao}</LeitoText>
          </div>

          <StyledContainer>
            <StatusImage src={cleaningImage} alt="Higienização" />
            <StatusText style={{ color: '#E5C281', fontSize: 14 }}>Higienização: {leitosCount.Higienização}</StatusText>
          </StyledContainer>

          <StyledContainer style={{ width: '90%', marginLeft: 0 }}>
            <StatusText style={{ fontSize: 12, color: '#909B97' }}>{leitos.find(leito => leito.numero === lastUpdated.higienizacao)?.andar}º andar - Sala {leitos.find(leito => leito.numero === lastUpdated.higienizacao)?.sala}</StatusText>
          </StyledContainer>

          <StyledContainer style={{ width: '90%', marginLeft: 0, flexDirection: 'column', fontSize: 12, color: '#909B97' }}>
            <StatusText>Previsão de liberação</StatusText>
            <StatusText>{Math.floor(Math.random() * 30)} min</StatusText>
          </StyledContainer>
        </InfoBalloon>
      </ChairContainer>

      <ChairContainer style={{ position: 'absolute', top: 150, right: 200 }}>
        <InfoBalloon style={{ height: 220 }}>
          <div style={{ backgroundColor: '#EE7C7B', padding: 7, borderRadius: 20, width: '90%' }}>
            <LeitoText>LEITO {lastUpdated.ocupado}</LeitoText>
          </div>

          <StyledContainer>
            <StatusImage src={occupiedImage} alt="Ocupado" />
            <StatusText style={{ color: '#EE7C7B', fontSize: 14 }}>Ocupado: {leitosCount.Ocupado}</StatusText>
          </StyledContainer>

          <StyledContainer style={{ width: '90%', marginLeft: 0 }}>
            <StatusText style={{ fontSize: 12, color: '#909B97' }}>{leitos.find(leito => leito.numero === lastUpdated.ocupado)?.andar}º andar - Sala {leitos.find(leito => leito.numero === lastUpdated.ocupado)?.sala}</StatusText>
          </StyledContainer>

          <StyledContainer style={{ width: '90%', marginLeft: 0 }}>
            <StatusText style={{ fontSize: 12, color: '#909B97' }}>Paciente <span style={{ color: randomStatus.color }}>{randomStatus.label}</span></StatusText>
          </StyledContainer>

          <StyledContainer style={{ width: '90%', marginLeft: 0, flexDirection: 'column', fontSize: 12, color: '#909B97' }}>
            <StatusText>Previsão de liberação</StatusText>
            <StatusText>{Math.floor(Math.random() * 30)} min</StatusText>
          </StyledContainer>
        </InfoBalloon>

        <ChairImage src={chairImageRed} alt="Cadeira Ocupada" />
      </ChairContainer>
    </LeitosWrapper >
  );
};

export default LeitoStatus;
