import React, { useState, useRef } from 'react';
import Header from "../../Components/Header";
import styled from 'styled-components';
import { PieChart, Pie, Cell, Legend, Tooltip, BarChart, CartesianGrid, XAxis, YAxis, Bar, Label } from 'recharts';
import SemiCircleChart from '../../Components/SemiCircleChart';
import WeeklyFlowChart from '../../Components/WeeklyFlowChart';
import InfoBalloon from '../../Components/InforBallon';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`;

const ContainerCards = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerInformations = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  align-items: center;
  background-color: #2D393D;
border-radius: 20px;
`;

const ScrollContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #4A5A5E;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const ScrollContent = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  width: 345px;
`;

const SalaTab = styled.div<{ isSelected: boolean }>`
  padding: 15px;
border-top-right-radius: 20px;
border-top-left-radius: 20px;
  background-color: ${props => props.isSelected ? '#2D393D' : '#4A5A5E'};
  color: '#FFFFFF';
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background-color: ${props => props.isSelected ? '#2D393D' : '#5A6A6E'};
  }
`;

const ScrollButton = styled.button`
  background-color: #4A5A5E;
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #5A6A6E;
  }
`;

const salas = Array.from({ length: 20 }, (_, i) => `Sala ${i + 1}`);

const data = [
  { name: 'Adultos', value: 400 },
  { name: 'Infantil', value: 300 },
  { name: 'Idosos', value: 300 },
];

// No componente principal, adicione a legenda personalizada
const dataPacientes = [
  { categoria: 'Crítico', pacientes: 15, fill: '#FF4444' },
  { categoria: 'Alto', pacientes: 25, fill: '#FFA000' },
  { categoria: 'Moderado', pacientes: 38, fill: '#FFEB3B' },
  { categoria: 'Baixo', pacientes: 60, fill: '#4CAF50' }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function Info() {
  const [selectedSala, setSelectedSala] = useState(salas[0]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <Container>
      <Header />
      <ContainerCards>
        <Cards>
          <h1>Nº INTERNAÇÕES</h1>
          <ContainerInformations>
            <ScrollContainer>
              <ScrollButton onClick={() => scroll(-100)}>{'<'}</ScrollButton>
              <ScrollContent ref={scrollRef}>
                {salas.map((sala) => (
                  <SalaTab
                    key={sala}
                    isSelected={sala === selectedSala}
                    onClick={() => setSelectedSala(sala)}
                  >
                    {sala}
                  </SalaTab>
                ))}
              </ScrollContent>
              <ScrollButton onClick={() => scroll(100)}>{'>'}</ScrollButton>
            </ScrollContainer>
            <PieChart width={300} height={300}>
              <Pie
                data={data}
                cx={150}
                cy={150}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ContainerInformations>

          <ContainerInformations style={{ height: 200 }}>
            <SemiCircleChart leitos={[{ tempoParaLiberacao: 6 }, { tempoParaLiberacao: 8 }]} />
          </ContainerInformations>
        </Cards>
        <Cards>
          <h1>QUADRO CLÍNICO</h1>
          <ContainerInformations>
            <ScrollContainer>
              <ScrollButton onClick={() => scroll(-100)}>{'<'}</ScrollButton>
              <ScrollContent ref={scrollRef}>
                {salas.map((sala) => (
                  <SalaTab
                    key={sala}
                    isSelected={sala === selectedSala}
                    onClick={() => setSelectedSala(sala)}
                  >
                    {sala}
                  </SalaTab>
                ))}
              </ScrollContent>
              <ScrollButton onClick={() => scroll(100)}>{'>'}</ScrollButton>
            </ScrollContainer>
            <BarChart
              width={300}
              height={300} // Reduzi um pouco a altura para acomodar a legenda
              data={dataPacientes}
              margin={{
                top: 50,
                right: 20,
                left: 0,
                bottom: 20
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="categoria"
                label={{
                  value: 'Nível de Criticidade',
                  position: 'bottom',
                  offset: 0
                }}
              />
              <YAxis
                label={{
                  value: 'Pacientes',
                  angle: -90,
                  position: 'left',
                  offset: -10
                }}
              />
              <Tooltip />
              <Bar
                dataKey="pacientes"
                name="Pacientes"
              >
                {
                  dataPacientes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))
                }
              </Bar>
            </BarChart>
          </ContainerInformations>

          <ContainerInformations style={{ height: 200 }}>
            <WeeklyFlowChart />
          </ContainerInformations>
        </Cards>

        <InfoBalloon
          tipo="higienizacao"
          leitoNumero={2}
          andar={1}
          sala={3}
          count={300}
          previsaoLiberacao={15}
        />
      </ContainerCards>
    </Container>
  );
};