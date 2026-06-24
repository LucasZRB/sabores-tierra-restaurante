import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 80vh;
  padding: 40px;
`;

export const LogoMain = styled.img`
  width: min(500px, 90vw);
  height: auto;
  margin-bottom: 30px;
`;

export const Description = styled.p`
  max-width: 600px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textoSecundario};
  margin-bottom: 40px;
`;

export const CTAButton = styled.button`
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.btnNormal};
  color: ${({ theme }) => theme.colors.textoPrincipal};
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }
`;

export const EmotionalText = styled.p`
  max-width: 650px;
  margin-top: 20px;
  font-size: 1rem;
  line-height: 1.7;
  font-family: ${({ theme }) => theme.fonts.nunito};
  color: ${({ theme }) => theme.colors.textoSecundario};
  opacity: 0.9;
`;
