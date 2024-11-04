// styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: #D8EDE3;
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  font-family: "Poppins", sans-serif;

   @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; // Permite que os cards se movam para a próxima linha se não houver espaço suficiente

  @media (max-width: 768px) {
    justify-content: center; // Centraliza os cards em telas menores
  }
`;

export const GestaoDeLeitos = styled.div`


`;

export const TitleNotificacoes = styled.h1`
  margin: 35px 150px;
  color: #2D393D;
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  font-weight: 600;

  @media (max-width: 768px) {
    margin: 20px 20px;
    font-size: 28px; // Diminui o tamanho da fonte em telas menores
  }
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

    @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    right: 20px;
    bottom: 20px;

    img {
      width: 50px;
      height: 50px;
    }
  }
`;
