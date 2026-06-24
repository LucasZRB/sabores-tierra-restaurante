import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.bgPrincipal};
  border-top: 4px solid ${({ theme }) => theme.colors.detalles};
  font-family: ${({ theme }) => theme.fonts.nunito};
  padding: 20px 40px;
`;

export const Copyright = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.grises.claro};
`;
