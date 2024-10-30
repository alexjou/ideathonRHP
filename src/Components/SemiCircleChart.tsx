import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

interface LeitorInfo {
  tempoParaLiberacao: number; // Tempo em horas para liberar o leito
}

interface SemiCircleChartProps {
  leitos: LeitorInfo[];
}

const SemiCircleChart: React.FC<SemiCircleChartProps> = ({ leitos }) => {
  // Calcula a média do tempo para liberação
  const mediaTempoLiberacao = leitos.reduce((acc, leito) => acc + leito.tempoParaLiberacao, 0) / leitos.length;

  const maxHoras = 24; // Assumindo um máximo de 24 horas para a escala
  const tempoMedioArredondado = Math.round(mediaTempoLiberacao);

  // Calcula a porcentagem do tempo médio em relação ao máximo
  const porcentagemTempo = Math.min((tempoMedioArredondado / maxHoras) * 100, 100);
  const porcentagemRestante = 100 - porcentagemTempo;

  const data = [
    { name: 'Tempo Médio', value: porcentagemTempo },
    { name: 'Restante', value: porcentagemRestante }
  ];

  const COLORS = ['#A259FF', '#D1D1D1'];

  return (
    <PieChart width={320} height={200}>
      <Pie
        data={data}
        cx={150}
        cy={150}
        startAngle={180}
        endAngle={0}
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
      <text
        x={155}
        y={120}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#FFFFFF"
        fontSize="12px"
      >
        Tempo médio
      </text>
      <text
        x={155}
        y={135}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#FFFFFF"
        fontSize="12px"
      >
        de Internação
      </text>
      <text
        x={150}
        y={160}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#FFFFFF"
        style={{ fontSize: '24px', fontWeight: 'bold' }}
      >
        {`${tempoMedioArredondado}h`}
      </text>
    </PieChart>
  );
};

export default SemiCircleChart;