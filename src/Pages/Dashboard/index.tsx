import Header from "../../Components/Header";
import styled from 'styled-components';
import VisaoGeral from "../../Components/VisaoGeral";
import GestaoDeLeitos from "../../Components/GestaoDeLeitos";
import InfoBalloon from "../../Components/InforBallon";
import AssetsChat from "../../assets/01 align center.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  `;

const ContainerCards = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TitleNotificacoes = styled.h1`
  margin: 35px 150px;
  color: #E1E1E1;
  font-family: Poppins;
  font-size: 40px;
  font-weight: 600;
`;

const ContainerChat = styled.div`
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
  background-color: #2D393D;
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

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <ContainerCards>
        <VisaoGeral />
        <GestaoDeLeitos />
        <InfoBalloon
          tipo={"ocupado"}
          leitoNumero={0}
          andar={0}
          sala={0}
          count={0}
        />
      </ContainerCards>
      <TitleNotificacoes>NOTIFICAÇÕES</TitleNotificacoes>
      <ContainerChat>
        <img src={ AssetsChat } alt="" />
      </ContainerChat>
    </Container>
  );
};

export default Dashboard;
