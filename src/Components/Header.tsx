import styled from 'styled-components';
import imgLogo from '../assets/photo.png';
import { FaSearch } from "react-icons/fa";

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
`;

const ContainerSearch = styled.div`
  width: 500px;
  padding: 10px;
  border-radius: 50px;
  border: 2px solid #ccc;
  background-color:transparent;
  outline: none;
`;

const Input = styled.input`
  width: 90%;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 16px;
  background-color: transparent;

  &::placeholder {
    color: #ccc;
  }
`;

const ContainerUserPhoto = styled.div`
  display: flex;
  align-items: center;
  `;

const ContainerUser = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  `;

const ImgUser = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const Header = () => {
  return (
    <ContainerHeader>
      <ContainerSearch>
        <FaSearch />
        <Input type="text" placeholder="Pesquisar..." />
      </ContainerSearch>
      <ContainerUserPhoto>
        <ContainerUser>
          <p>Olá, Bruno Costa</p>
          <p>Infermeiro</p>
        </ContainerUser>
        <ImgUser src={ imgLogo } alt="" />
      </ContainerUserPhoto>
    </ContainerHeader>
  )
};

export default Header;