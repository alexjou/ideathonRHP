import styled from 'styled-components';
import ImgBackground from '../../assets-landing/background.png';

export const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${ImgBackground});
  background-size: cover; /* A imagem cobre toda a área */
  background-position: center; /* A imagem fica centralizada */
  background-attachment: fixed; /* A imagem fica fixa ao rolar a página */
  color: white; /* Ajuste a cor do texto se necessário */
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  padding: 40px;
  height: 100%;
  background-image: url('/path/to/your/image.jpg');
  background-size: cover;
  background-position: center;
`;

export const TextSection = styled.div`
  font-family: "Poppins", sans-serif;
  width: 60%;
  margin-top: 100px;
 

  h1 {
    
    margin-left: 150px;
    font-size: 40px;
    color: #79B285;
  }

  h2 {
    
    margin-left: 150px;
    font-size: 48px;
    color: #2D393D;
  }
  p {
  margin-top: 12px;
  margin-left: 150px;
  font-size: 24px;  
  color: #2D393D;
  }

  button {
    
    width: 398px;
    height: 112px;
    margin-top: 100px;
    margin-left: 150px;
    padding: 40px;
    border-radius: 50px;
    border: none;
    background-color: #79B285;
    color: #F1FAF9;
    font-weight: 600;
    font-size: 32px;
    cursor: pointer;
  }
`;

export const ImagesSection = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
`;
