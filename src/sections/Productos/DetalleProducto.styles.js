import styled from 'styled-components';

export const DetailWrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 20px;
`;

export const BackButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.detalles};
  font-size: 1.1rem;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const FlexLayout = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const DishImage = styled.img`
  width: 100%;
  max-width: 450px;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.detalles};
`;

export const InfoPane = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.accent}; /* Estrellas doradas */
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-size: 0.9rem;

  span {
    color: ${({ theme }) => theme.colors.textoSecundario};
  }
`;

export const ProductTitle = styled.h2`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.textoPrincipal};
  margin-bottom: 10px;
  line-height: 1;
`;

export const PriceTag = styled.p`
  font-family: ${({ theme }) => theme.fonts.teko};
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 20px;
`;

export const ProductDescription = styled.p`
  color: ${({ theme }) => theme.colors.textoSecundario}; /* #ecdbc1 */
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 30px;
`;

export const PurchaseActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.detalles};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grises.oscuro};
  overflow: hidden;

  button {
    background: transparent;
    color: ${({ theme }) => theme.colors.textoPrincipal};
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: ${({ theme }) => theme.colors.grises.medio};
    }
  }

  span {
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-weight: bold;
    padding: 0 15px;
    min-width: 40px;
    text-align: center;
  }
`;

export const OrderButton = styled.button`
  background-color: ${({ theme }) => theme.colors.btnNormal}; /* #7b4a03 */
  color: ${({ theme }) => theme.colors.textoPrincipal};
  padding: 0 35px;
  height: 42px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent}; /* #e8a441 */
  }
`;