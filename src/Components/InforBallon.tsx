import React from 'react';
import styled from 'styled-components';
import availableImage from '../assets/icon1.png';
import cleaningImage from '../assets/icon2.png';
import occupiedImage from '../assets/icon3.png';

interface InfoBalloonProps {
  tipo: 'livre' | 'higienizacao' | 'ocupado';
  leitoNumero: number;
  andar: number;
  sala: number;
  count: number;
  previsaoLiberacao?: number;
}

const InfoBalloonContainer = styled.div`
margin-left: -200px;
margin-top: 60px;
  width: 180px;
  height: 150px;
  border-radius: 20px;
  background-color: rgba(207, 207, 207, 0.2);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  color: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeitoText = styled.p`
  text-align: center;
  color: #000;
  font-weight: bold;
  margin: 0;
`;

const StyledContainer = styled.div`
  background-color: #3A4A48;
  padding: 5px;
  border-radius: 20px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const StatusImage = styled.img`
  width: 25px;
  height: auto;
  margin-right: 10px;
`;

const StatusText = styled.p`
  font-size: 14px;
  margin: 0;
`;

const InfoText = styled.p`
  font-size: 12px;
  color: #909B97;
  margin: 5px 0;
`;

const InfoBalloon: React.FC<InfoBalloonProps> = ({
  tipo,
  leitoNumero,
  andar,
  sala,
  count,
  previsaoLiberacao
}) => {
  let color: string;
  let title: string;
  let statusImage: string;

  switch (tipo) {
    case 'livre':
      color = '#14C871';
      title = 'Livre';
      statusImage = availableImage;
      break;
    case 'higienizacao':
      color = '#E5C281';
      title = 'Higienização';
      statusImage = cleaningImage;
      break;
    case 'ocupado':
      color = '#EE7C7B';
      title = 'Ocupado';
      statusImage = occupiedImage;
      break;
  }

  return (
    <InfoBalloonContainer style={{ height: tipo === 'livre' ? 150 : 220 }}>
      <div style={{ backgroundColor: color, padding: 7, borderRadius: 20, width: '90%' }}>
        <LeitoText>LEITO {leitoNumero}</LeitoText>
      </div>

      <StyledContainer>
        <StatusImage src={statusImage} alt={title} />
        <StatusText style={{ color: color }}>{title}: {count}</StatusText>
      </StyledContainer>

      <StyledContainer style={{ width: '90%', marginLeft: 0 }}>
        <InfoText>{andar}º andar - Sala {sala}</InfoText>
      </StyledContainer>

      {tipo === 'ocupado' && (
        <StyledContainer style={{ width: '90%', marginLeft: 0 }}>
          <InfoText>Paciente <span style={{ color: 'orange' }}>estável</span></InfoText>
        </StyledContainer>
      )}

      {(tipo === 'higienizacao' || tipo === 'ocupado') && (
        <StyledContainer style={{ width: '90%', marginLeft: 0, flexDirection: 'column' }}>
          <InfoText>Previsão de liberação</InfoText>
          <InfoText>{previsaoLiberacao || Math.floor(Math.random() * 30)} min</InfoText>
        </StyledContainer>
      )}
    </InfoBalloonContainer>
  );
};

export default InfoBalloon;