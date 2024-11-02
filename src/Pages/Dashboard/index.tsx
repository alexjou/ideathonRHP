// index.tsx
import Header from "../../Components/Header";
import VisaoGeral from "../../Components/VisaoGeral";
import GestaoDeLeitos from "../../Components/GestaoDeLeitos";
import InfoBalloon from "../../Components/InforBallon";
import AssetsChat from "../../assets/01 align center.svg";
import { Container, ContainerCards, TitleNotificacoes, ContainerChat } from "./styles";

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
