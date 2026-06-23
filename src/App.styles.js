import styled, { css } from 'styled-components';

export const MainLayout = styled.main`
  min-height: 100vh;
  padding: 20px;
  padding-top: 98px;
  background-size: cover;
  background-position: center top;

  ${({ $isPrincipal }) => $isPrincipal && css`
  /* Imagen sutil de fondo usando una máscara oscura para no molestar la lectura */
  background-image:
    linear-gradient(
      rgba(0,0,0,0.1),
      rgba(0,0,0,0.1)
    ),
    url('../src/assets/fondoInicio.png');`
  }
`;
