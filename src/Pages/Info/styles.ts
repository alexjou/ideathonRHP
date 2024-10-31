// styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
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
  background-color: #2D393D;
  border-radius: 20px;
`;

export const ScrollContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #4A5A5E;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ScrollContent = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  width: 345px;
`;

export const SalaTab = styled.div<{ isSelected: boolean }>`
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

export const ScrollButton = styled.button`
  background-color: #4A5A5E;
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #5A6A6E;
  }
`;
