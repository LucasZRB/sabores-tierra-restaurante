import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 80vh;
  padding: 40px;
  /* Imagen sutil de fondo usando una máscara oscura para no molestar la lectura */
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
              url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920') no-repeat center center;
  background-size: cover;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.textoPrincipal};
  margin-bottom: 10px;
  letter-spacing: 2px;
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textoSecundario};
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: 400;
  margin-bottom: 25px;
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
