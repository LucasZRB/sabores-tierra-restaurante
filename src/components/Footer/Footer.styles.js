import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.bgPrincipal};
  border-top: 1px solid ${({ theme }) => theme.colors.detalles};
  color: ${({ theme }) => theme.colors.textoSecundario}; /* #ecdbc1 */
  font-family: ${({ theme }) => theme.fonts.nunito};
  padding: 60px 40px 20px 40px;
  margin-top: 80px;
`;

export const FooterGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h3 {
    font-family: ${({ theme }) => theme.fonts.teko};
    color: ${({ theme }) => theme.colors.detalles}; /* #cbc2b5 */
    font-size: 1.8rem;
    letter-spacing: 1px;
    margin-bottom: 5px;
  }

  p, li {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: 600;

  a {
    color: ${({ theme }) => theme.colors.textoSecundario};
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const Copyright = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.grises.oscuro};
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
  text-align: center;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.grises.claro};
`;
