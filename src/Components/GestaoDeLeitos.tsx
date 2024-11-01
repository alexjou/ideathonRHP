import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Cards = styled.div`
  display: flex;
  flex-direction: column;

  h1:first-child {
    color: #E1E1E1;
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const ContainerInformations = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  align-items: center;
  background-color: #F1FAF9;
  border-radius: 20px;
`;

const ScrollContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #B8DBBF;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const ScrollContent = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  width: 345px;
`;

const SalaTab = styled.div<{ isSelected: boolean }>`
  padding: 15px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${props => (props.isSelected ? '#F1FAF9' : '#B8DBBF')};
  color: #2D393D;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.3s ease;

 
`;
const ScrollButton = styled.button`
  background-color: transparent;
  border: none;
  color: #2D393D;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5A6A6E;
  }
`;
const NumberContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  padding: 15px;
`;

const NumberBox = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  color: ${props => props.color};
  border-radius: 10px;

  font-size: 16px;
  font-weight: bold;
`;

const salas = Array.from({ length: 20 }, (_, i) => `Sala ${i + 1}`);

const statuses = ['livre', 'higienizacao', 'ocupado'];
const colors = {
  livre: '#66D766',
  higienizacao: '#FFE07B',
  ocupado: '#FF6B6B'
};
const svgs = {
  livre: '<svg xmlns="http://www.w3.org/2000/svg" width="42" height="36" viewBox="0 0 42 36" fill="none"><path d="M33.2475 16.3446H3.7279V2.61641C3.7279 1.66917 2.94997 0.900391 1.99145 0.900391C1.03293 0.900391 0.255005 1.66917 0.255005 2.61641V33.5048C0.255005 34.452 1.03293 35.2208 1.99145 35.2208C2.94997 35.2208 3.7279 34.452 3.7279 33.5048V30.0727H38.4569V33.5048C38.4569 34.452 39.2331 35.2208 40.1933 35.2208C41.1536 35.2208 41.9298 34.452 41.9298 33.5048V24.9247C41.9298 20.1936 38.0349 16.3446 33.2475 16.3446Z" fill="#66D766"/></svg>',
  higienizacao: '<svg xmlns="http://www.w3.org/2000/svg" width="43" height="39" viewBox="0 0 43 39" fill="none"><path d="M33.5163 19.6292H3.92253V5.70272C3.92253 4.7418 3.14265 3.96191 2.18173 3.96191C1.2208 3.96191 0.440918 4.7418 0.440918 5.70272V37.0373C0.440918 37.9982 1.2208 38.7781 2.18173 38.7781C3.14265 38.7781 3.92253 37.9982 3.92253 37.0373V33.5556H38.7387V37.0373C38.7387 37.9982 39.5168 38.7781 40.4795 38.7781C41.4422 38.7781 42.2203 37.9982 42.2203 37.0373V28.3332C42.2203 23.5338 38.3157 19.6292 33.5163 19.6292Z" fill="#FFE07B"/><path d="M14.7287 14.0218C14.7287 17.7622 17.7605 20.7945 21.5007 20.7955L14.7287 14.0218ZM14.7287 14.0218C14.7287 10.2808 17.7614 7.24812 21.5024 7.24812M14.7287 14.0218L21.5024 7.24812M21.5024 7.24812C25.2428 7.24812 28.2751 10.2799 28.276 14.0201L21.5024 7.24812ZM21.504 1.49023H21.5024C14.5814 1.49023 8.97083 7.1008 8.97083 14.0218C8.97083 20.9428 14.5814 26.5533 21.5024 26.5533C28.4234 26.5533 34.0339 20.9428 34.0339 14.0218V14.0202C34.0264 7.10316 28.421 1.49772 21.504 1.49023ZM28.276 14.0203C28.2718 17.7604 25.2409 20.7912 21.5009 20.7955L28.276 14.0203Z" fill="#FFE07B" stroke="#2D393D" stroke-width="3"/><path d="M21.5024 16.8634C22.2639 16.8634 22.8813 16.246 22.8813 15.4844V9.04935C22.8813 8.28779 22.2639 7.67041 21.5024 7.67041C20.7408 7.67041 20.1234 8.28779 20.1234 9.04935V15.4844C20.1234 16.246 20.7408 16.8634 21.5024 16.8634Z" fill="#FFE07B"/><path d="M21.5068 20.4569C22.2683 20.4569 22.8857 19.8395 22.8857 19.0779C22.8857 18.3163 22.2683 17.699 21.5068 17.699C20.7452 17.699 20.1278 18.3163 20.1278 19.0779C20.1278 19.8395 20.7452 20.4569 21.5068 20.4569Z" fill="#FFE07B"/></svg>',
  ocupado: '<svg xmlns="http://www.w3.org/2000/svg" width="42" height="35" viewBox="0 0 42 35" fill="none"><path d="M15.883 13.1758C15.883 14.0243 15.6284 14.8537 15.1514 15.5592C14.6744 16.2647 13.9964 16.8146 13.2032 17.1393C12.41 17.464 11.5371 17.549 10.695 17.3834C9.85291 17.2179 9.0794 16.8093 8.47228 16.2093C7.86517 15.6094 7.45171 14.8449 7.28421 14.0128C7.11671 13.1806 7.20268 12.318 7.53125 11.5341C7.85982 10.7502 8.41623 10.0802 9.13012 9.60876C9.84402 9.13737 10.6833 8.88576 11.5419 8.88576C12.6933 8.88576 13.7974 9.33775 14.6116 10.1423C15.4257 10.9468 15.883 12.038 15.883 13.1758ZM41.9298 17.4659V14.0338C41.9298 12.2134 41.198 10.4674 39.8954 9.18018C38.5928 7.89292 36.8261 7.16974 34.984 7.16974H26.3017C24.4596 7.16974 22.6929 7.89292 21.3903 9.18018C20.0877 10.4674 19.3559 12.2134 19.3559 14.0338V17.4659H41.9298ZM3.7279 20.8979V2.02168C3.7279 1.56657 3.54495 1.13009 3.21931 0.808274C2.89366 0.486458 2.45199 0.305664 1.99145 0.305664C1.53092 0.305664 1.08925 0.486458 0.763599 0.808274C0.437952 1.13009 0.255005 1.56657 0.255005 2.02168L0.255005 32.91C0.255005 33.3652 0.437952 33.8016 0.763599 34.1234C1.08925 34.4453 1.53092 34.6261 1.99145 34.6261C2.45199 34.6261 2.89366 34.4453 3.21931 34.1234C3.54495 33.8016 3.7279 33.3652 3.7279 32.91V29.478H38.4569V32.91C38.4569 33.3652 38.6398 33.8016 38.9655 34.1234C39.2911 34.4453 39.7328 34.6261 40.1933 34.6261C40.6539 34.6261 41.0955 34.4453 41.4212 34.1234C41.7468 33.8016 41.9298 33.3652 41.9298 32.91V20.8979H3.7279Z" fill="#FA7A7A"/></svg>'
};

const DescriptionContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 90%;
`;

const DescriptionItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  span {
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
  }
`;

const ColorBox = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  background-color: ${props => props.color};
  border-radius: 50px;
  margin-right: 10px;
`;

const ContainerDescriptionHigienizacao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconContainer = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescriptionText = styled.p`
  color: #FFE07B;
  font-size: 12px;
  margin: 6px;
`;

const numbers = Array.from({ length: 20 }, (_, i) => {
  const status = statuses[i % statuses.length];
  return {
    number: (i + 1).toString().padStart(3, '0'),
    status,
    color: colors[status as keyof typeof colors],
    svg: svgs[status as keyof typeof svgs]
  };
});

const GestaoDeLeitos = () => {
  const [selectedSala, setSelectedSala] = useState(salas[0]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <Cards>
      <h1>GESTÃO DE LEITOS</h1>
      <ContainerInformations>
        <ScrollContainer>
          <ScrollButton onClick={() => scroll(-100)}>{'<'}</ScrollButton>
          <ScrollContent ref={scrollRef}>
            {salas.map((sala) => (
              <SalaTab
                key={sala}
                isSelected={sala === selectedSala}
                onClick={() => setSelectedSala(sala)}
              >
                {sala}
              </SalaTab>
            ))}
          </ScrollContent>
          <ScrollButton onClick={() => scroll(100)}>{'>'}</ScrollButton>
        </ScrollContainer>
        <NumberContainer>
          {numbers.map((item) => (
            <NumberBox key={item.number} color={item.color}>
              <div dangerouslySetInnerHTML={{ __html: item.svg }} />
              {item.number}
            </NumberBox>
          ))}
        </NumberContainer>
      </ContainerInformations>

      <ContainerInformations style={{ height: 121 }}>
<DescriptionContainer>
          <DescriptionItem>
            <ColorBox color="#66D766" />
            <span style={ { color:"#66D766" } }>Livre</span>
          </DescriptionItem>
          <DescriptionItem>
            <ContainerDescriptionHigienizacao>
              <InnerContainer>
                <ColorBox color="#FFE07B" />
                <span style={ { color:"#FFE07B" } }>Em higienização</span>
              </InnerContainer>
              <IconContainer>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="35" viewBox="0 0 14 35" fill="none">
                  <path d="M7 0.24707C5.61553 0.24707 4.26215 0.657613 3.11101 1.42678C1.95987 2.19595 1.06266 3.2892 0.532846 4.56829C0.003033 5.84737 -0.13559 7.25483 0.134506 8.6127C0.404603 9.97057 1.07129 11.2178 2.05026 12.1968C3.02922 13.1758 4.2765 13.8425 5.63437 14.1126C6.99224 14.3827 8.3997 14.244 9.67879 13.7142C10.9579 13.1844 12.0511 12.2872 12.8203 11.1361C13.5895 9.98492 14 8.63154 14 7.24707C13.998 5.39117 13.2599 3.61186 11.9475 2.29954C10.6352 0.98722 8.8559 0.249078 7 0.24707V0.24707ZM7 13.0804C5.84628 13.0804 4.71846 12.7383 3.75918 12.0973C2.79989 11.4563 2.05222 10.5453 1.61071 9.47939C1.16919 8.41349 1.05368 7.2406 1.27876 6.10904C1.50384 4.97749 2.05941 3.93809 2.87521 3.12228C3.69102 2.30647 4.73042 1.7509 5.86198 1.52582C6.99353 1.30074 8.16642 1.41626 9.23232 1.85777C10.2982 2.29928 11.2093 3.04696 11.8502 4.00624C12.4912 4.96553 12.8333 6.09335 12.8333 7.24707C12.8316 8.79364 12.2165 10.2764 11.1229 11.37C10.0293 12.4636 8.54658 13.0787 7 13.0804Z" fill="#FFE07B"/>
                  <path d="M6.99993 3.74707C6.84522 3.74707 6.69684 3.80853 6.58745 3.91792C6.47805 4.02732 6.41659 4.17569 6.41659 4.3304V6.85331L4.45018 8.08531C4.31867 8.16746 4.22519 8.29849 4.19029 8.44956C4.1554 8.60064 4.18194 8.75939 4.26409 8.89089C4.34625 9.0224 4.47727 9.11588 4.62835 9.15078C4.77942 9.18567 4.93817 9.15913 5.06968 9.07698L7.30968 7.67698C7.39431 7.62395 7.46391 7.55008 7.51181 7.46245C7.55972 7.37481 7.58432 7.27635 7.58326 7.17648V4.3304C7.58326 4.17569 7.5218 4.02732 7.41241 3.91792C7.30301 3.80853 7.15464 3.74707 6.99993 3.74707Z" fill="#FFE07B"/>
                  <path d="M6.91104 20.2124C3.09417 20.2124 0 23.3066 0 27.1234C0 30.9403 3.09417 34.0345 6.91104 34.0345C10.7279 34.0345 13.8221 30.9403 13.8221 27.1234C13.8179 23.3083 10.7262 20.2165 6.91104 20.2124ZM6.91104 32.3067C4.04838 32.3067 1.72776 29.9861 1.72776 27.1234C1.72776 24.2608 4.04838 21.9402 6.91104 21.9402C9.77369 21.9402 12.0943 24.2608 12.0943 27.1234C12.0911 29.9848 9.77237 32.3035 6.91104 32.3067Z" fill="#FFE07B"/>
                  <path d="M6.91124 28.9037C7.38835 28.9037 7.77512 28.5169 7.77512 28.0398V24.0084C7.77512 23.5313 7.38835 23.1445 6.91124 23.1445C6.43414 23.1445 6.04736 23.5313 6.04736 24.0084V28.0398C6.04736 28.5169 6.43414 28.9037 6.91124 28.9037Z" fill="#FFE07B"/>
                  <path d="M6.91405 31.155C7.39116 31.155 7.77793 30.7682 7.77793 30.2911C7.77793 29.814 7.39116 29.4272 6.91405 29.4272C6.43694 29.4272 6.05017 29.814 6.05017 30.2911C6.05017 30.7682 6.43694 31.155 6.91405 31.155Z" fill="#FFE07B"/>
                </svg>
                <div>
                  <DescriptionText>Em andamento</DescriptionText>
                  <DescriptionText>Aguardando equipe</DescriptionText>
                </div>
              </IconContainer>
            </ContainerDescriptionHigienizacao>
          </DescriptionItem>
          <DescriptionItem>
             <ColorBox color="#FF6B6B" />
             <span style={ { color:"#FF6B6B" } }>Ocupado</span>
          </DescriptionItem>
        </DescriptionContainer>
      </ContainerInformations>
    </Cards>
  );
};

export default GestaoDeLeitos;