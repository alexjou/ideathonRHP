import Header from "../../Components/Header";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  `;

const ContainerCards = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;

`;

const ContainerSalas = styled.div`
  margin-top: 20px;
  display: flex;
  width: 500px;
  height: 500px;
  background-color: #2D393D;
`;

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <ContainerCards>
        <Cards>
          <h1>VISÃO GERAL</h1>
          <ContainerSalas>

          </ContainerSalas>
        </Cards>
        <Cards>
          <h1>GESTÃO DE LEITOS</h1>
        </Cards>
      </ContainerCards>
    </Container>
  );
};

export default Dashboard;
