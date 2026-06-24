import styled from 'styled-components';

export const HistoryWrapper = styled.section`
  max-width: 900px;
  margin: 60px auto;
  padding: 0 20px;
  position: relative;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  position: relative;
  z-index: 2; /* Por encima de los SVGs decorativos */
`;

export const HistoryText = styled.p`
  color: ${({ theme }) => theme.colors.textoSecundario}; /* #ecdbc1 */
  font-family: ${({ theme }) => theme.fonts.nunito};
  font-size: 1.3rem;
  line-height: 1.8;
  text-align: center;
  flex: 1;
  max-width: 650px;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

export const TriangleButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.detalles}; /* #cbc2b5 */
  font-size: 2rem;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const ControlButton = styled.button`
  padding: 12px 28px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.btnNormal};
  color: ${({ theme }) => theme.colors.textoPrincipal};
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.25s ease;
  position: absolute;
  bottom: -26px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

/* Contenedores para tus SVGs o Íconos que decoran el fondo */
export const BackgroundIcon = styled.div`
  position: absolute;
  opacity: 0.15; /* Sutil para no molestar la lectura */
  z-index: 1;
  color: ${({ theme }) => theme.colors.detalles};
  
  &.left {
    left: 5%;
    top: 20%;
  }
  &.right {
    right: 5%;
    bottom: 20%;
  }
`;
