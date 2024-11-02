// styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  color: #2D393D;
  font-family: "Poppins", sans-serif;
  background-color: #D8EDE3;
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerInformations = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  align-items: center;
  background-color: #F1FAF9;
  border-radius: 20px;
`;

export const ScrollContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #B8DBBF;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ScrollContent = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  width: 345px;
  transition: transform 0.5s ease; /* Adiciona uma transição suave */
`;

export const SalaTab = styled.div<{ isSelected: boolean }>`
  padding: 15px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${props => props.isSelected ? '#F1FAF9' : '#B8DBBF'};
  color: '#2D393D';
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.3s ease;
`;

export const ScrollButton = styled.button`
  background-color: transparent;
  border: none;
  color: #2D393D;
  padding: 10px;
  cursor: pointer;
  
`;
