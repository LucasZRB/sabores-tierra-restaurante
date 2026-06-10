import styled from 'styled-components';

export const GridContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.detalles};
  text-align: center;
  margin-bottom: 50px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.grises.oscuro};
  border: 1px solid ${({ theme }) => theme.colors.detalles};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 10px 20px rgba(232, 164, 65, 0.1);
  }
`;

export const CardImage = styled.div`
  height: 200px;
  background-color: ${({ theme }) => theme.colors.bloques}; /* Color gris/bloque para carga/placeholder */
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
`;

export const CardContent = styled.div`
  padding: 20px;
`;

export const CardTitle = styled.h3`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.textoPrincipal};
  margin-bottom: 10px;
`;

export const CardText = styled.p`
  color: ${({ theme }) => theme.colors.textoSecundario};
  font-size: 0.95rem;
  line-height: 1.4;
`;
