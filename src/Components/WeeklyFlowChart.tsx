import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const Title = styled.h4`
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 10px;
`;

interface DadosDiarios {
  dia: string;
  entradas: number;
  saidas: number;
}

interface WeeklyFlowChartProps {
  dados?: DadosDiarios[];
}

const WeeklyFlowChart: React.FC<WeeklyFlowChartProps> = ({ dados }) => {
  // Dados de exemplo caso não sejam fornecidos
  const dadosPadrao: DadosDiarios[] = [
    { dia: 'Dom', entradas: 15, saidas: 10 },
    { dia: 'Seg', entradas: 20, saidas: 18 },
    { dia: 'Ter', entradas: 25, saidas: 22 },
    { dia: 'Qua', entradas: 22, saidas: 20 },
    { dia: 'Qui', entradas: 30, saidas: 25 },
    { dia: 'Sex', entradas: 27, saidas: 24 },
    { dia: 'Sáb', entradas: 18, saidas: 15 },
  ];

  const dadosGrafico = dados || dadosPadrao;

  return (
    <ChartContainer>
      <Title>Fluxo Semanal de Pacientes</Title>
      <ResponsiveContainer width="100%" height={120}>
        <LineChart
          data={dadosGrafico}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#4A5A5E" />
          <XAxis
            dataKey="dia"
            stroke="#FFFFFF"
            tick={{ fill: '#FFFFFF' }}
          />
          <YAxis
            stroke="#FFFFFF"
            tick={{ fill: '#FFFFFF' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#2D393D',
              border: '1px solid #4A5A5E',
              color: '#FFFFFF'
            }}
          />
          <Legend
            wrapperStyle={{ color: '#FFFFFF' }}
          />
          <Line
            type="monotone"
            dataKey="entradas"
            stroke="#00C49F"
            strokeWidth={2}
            name="Entradas"
            dot={{ fill: '#00C49F', strokeWidth: 2 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="saidas"
            stroke="#FF4444"
            strokeWidth={2}
            name="Saídas"
            dot={{ fill: '#FF4444', strokeWidth: 2 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default WeeklyFlowChart;