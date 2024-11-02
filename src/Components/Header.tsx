import styled from 'styled-components';
import imgLogo from '../assets/Ellipse 18.svg';
import { CiSearch } from "react-icons/ci";

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
`;

const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 586px;
  height: 51px;
  border-radius: 50px;
  background-color: #BDD3CC;
  outline: none;
`;

const Input = styled.input`
  width: 90%;
  color: #E1E1E1;
  border: none;
  outline: none;
  padding: 0;
  font-size: 16px;
  background-color: transparent;

  &::placeholder {
    color: #E1E1E1;
    font-size: 1.2em;
  }
`;

const ContainerUserPhoto = styled.div`
  display: flex;
  align-items: center;
  background-color: #F1FAF9;
  border-radius: 15px;
  `;

const ContainerUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-right: 20px;
  margin-left: 5px;

  p:first-child {
    color: #2D393D;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  p:last-child {
    color: #2D393D;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  `;

const ImgUser = styled.img`
  border: 5px solid #D8EDE3;
  border-radius: 68px;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat, #D9D9D9;
  width: var(--Spacing-Font-size-H1, 68px);
  height: var(--Spacing-Font-size-H1, 68px);
  flex-shrink: 0;
`;

const Header = () => {
  return (
    <ContainerHeader>
      <ContainerSearch>
        <CiSearch style={ { fontSize:"1.5em", marginLeft:"15px" } } />
        <Input type="text" placeholder="Pesquisar..." />
      </ContainerSearch>
      <ContainerUserPhoto>
        <ContainerUser>
          <p>Olá, Bruno Costa</p>
          <p>Enfermeiro</p>
        </ContainerUser>
        <ImgUser src={ imgLogo } alt="" />
      </ContainerUserPhoto>
    </ContainerHeader>
  )
};

export default Header;