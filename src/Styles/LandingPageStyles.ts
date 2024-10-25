import styled from 'styled-components';

interface PageWrapperProps {
  backgroundImage: string; // Define o tipo da prop
}

export const PageWrapper = styled.div <PageWrapperProps>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${props => props.backgroundImage});
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
  width: 40%;
  color: #fff;

  h1 {
    font-size: 4rem;
  color: #fff;
  }

  h2 {
    font-size: 2rem;
    margin-top: 20px;
  color: #fff;
  }

  button {
    margin-top: 30px;
    padding: 10px 30px;
    border-radius: 50px;
    border: none;
    background-color: #ff6f61;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export const ImagesSection = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
`;
