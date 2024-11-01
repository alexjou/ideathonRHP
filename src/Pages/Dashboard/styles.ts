// styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const TitleNotificacoes = styled.h1`
  margin: 35px 150px;
  color: #E1E1E1;
  font-family: Poppins;
  font-size: 40px;
  font-weight: 600;
`;

export const ContainerChat = styled.div`
  width: 134px;
  height: 134px;
  flex-shrink: 0;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  text-align: center;
  right: 50px;
  bottom: 50px;
  background-color: #006035;
  border-radius: 50%;

  img {
    display: flex;
    width: 73px;
    height: 73px;
    padding: 0px 0px 0px 0.072px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
`;
