import { useState } from 'react';
import styled from 'styled-components';

const CardVisaoGeral = styled.div`
  display: flex;
  flex-direction: column;

  h1:first-child {
    margin-bottom: 25px;
    color: #E1E1E1;
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const ContainerSalas = styled.div`
  width: 576px;
  height: 540px;
  flex-shrink: 0;
  border-radius: 18px;
  background: #2D393D;
`;

const TitleSalas = styled.h2`
    display: flex;
    align-items: center;
    padding-left: 20px;
    text-align: center;
    align-items: center;
    margin: 20px 0;
    width: 179px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 0px 41px 41px 0px;
    background: #BEC9D8;
    color: #2D393D;
    font-size: 24px;
    
`;

const TitleAndar = styled.h1`
margin: 20px;
  display: flex;
  width: 191px;
  height: 33px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #F8F8F8;
  font-family: Poppins;
  font-size: 31px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const SalasPrimeiroAndar = styled.div`
  display: flex;
  justify-content: space-around;
  `;

const CardSalas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 234.044px;
  height: 154.194px;
  flex-shrink: 0;
  border-radius: 18px;
  background: #4A5F63;

  h2 {
    display: flex;
    width: 114.269px;
    height: 33.042px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #F8F8F8;
    text-align: center;
    font-family: Poppins;
    font-size: 27px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const Leitos = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 214.77px;
  height: 38.548px;
  flex-shrink: 0;
  border-radius: 18px;
  background: #2D393D;
`;

const LeitoLivre = styled.div`
  display: flex;
  text-align: center;

  div {
    width: 17px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #66D766;
  }

  p {
    width: 31.665px;
    height: 18px;
    flex-shrink: 0;
    color: #66D766;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
  }
`;

const LeitoEmHigienização = styled.div`
  display: flex;
  text-align: center;

  div {
    width: 17px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #FFE07B;
  }

  p {
    width: 31.665px;
    height: 18px;
    flex-shrink: 0;
    color: #FFE07B;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
  }
`;

const LeitoOcupado = styled.div`
  display: flex;
  text-align: center;

  div {
    width: 17px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #FF6B6B;
  }

  p {
    width: 31.665px;
    height: 18px;
    flex-shrink: 0;
    color: #FF6B6B;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
  }
`;

const VisaoGeral = () => {

  return (
        <CardVisaoGeral>
          <h1>VISÃO GERAL</h1>
          <ContainerSalas>
            <TitleSalas>Salas</TitleSalas>
            <TitleAndar>1º Andar</TitleAndar>
            <SalasPrimeiroAndar>
              <CardSalas>
                <h2>Sala 01</h2>
                <p>Leitos adultos</p>
                <Leitos>
                  <LeitoLivre>
                    <div></div>
                    <p>07</p>
                  </LeitoLivre>
                  <LeitoEmHigienização>
                    <div></div>
                    <p>02</p>
                  </LeitoEmHigienização>
                  <LeitoOcupado>
                    <div></div>
                    <p>09</p>
                  </LeitoOcupado>
                </Leitos>
              </CardSalas>
              <CardSalas>
                <h2>Sala 02</h2>
                <p>Leitos adultos</p>
                <Leitos>
                <LeitoLivre>
                    <div></div>
                    <p>10</p>
                  </LeitoLivre>
                  <LeitoEmHigienização>
                    <div></div>
                    <p>01</p>
                  </LeitoEmHigienização>
                  <LeitoOcupado>
                    <div></div>
                    <p>08</p>
                  </LeitoOcupado>
                </Leitos>
              </CardSalas>
            </SalasPrimeiroAndar>
            <TitleAndar>2º Andar</TitleAndar>
            <SalasPrimeiroAndar>
              <CardSalas>
                <h2>Sala 03</h2>
                <p>Leitos adultos</p>
                <Leitos>
                <LeitoLivre>
                    <div></div>
                    <p>07</p>
                  </LeitoLivre>
                  <LeitoEmHigienização>
                    <div></div>
                    <p>02</p>
                  </LeitoEmHigienização>
                  <LeitoOcupado>
                    <div></div>
                    <p>09</p>
                  </LeitoOcupado>
                </Leitos>
              </CardSalas>
              <CardSalas>
                <h2>Sala 04</h2>
                <p>Leitos adultos</p>
                <Leitos>
                <LeitoLivre>
                    <div></div>
                    <p>10</p>
                  </LeitoLivre>
                  <LeitoEmHigienização>
                    <div></div>
                    <p>01</p>
                  </LeitoEmHigienização>
                  <LeitoOcupado>
                    <div></div>
                    <p>08</p>
                  </LeitoOcupado>
                </Leitos>
              </CardSalas>
            </SalasPrimeiroAndar>
            
          </ContainerSalas>
        </CardVisaoGeral>
  );
};

export default VisaoGeral;
