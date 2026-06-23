import styled from 'styled-components';

export const NavContainer = styled.nav`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.teko};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 78px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 4px solid ${({ theme }) => theme.colors.detalles};
  background-color: ${({ theme }) => theme.colors.bgPrincipal};
  z-index: 1;
`;

export const LogoContainer = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.detalles};
`;

export const LogoImg = styled.img`
  position: absolute;
  top: 10px;
  height: 55px;
  object-fit: contain;
`;

export const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;

  @media (max-width: 780px) {
    gap: 24px
  }
`;

export const NavItem = styled.li`
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 1px;
  cursor: pointer;
  
  /* Si la pestaña está activa, brilla con el color accent; si no, texto principal */
  color: ${({ active, theme }) =>
    active
      ? theme.colors.accent
      : theme.colors.textoPrincipal};

  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const TextItem = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 780px) {
    max-width: 50px;
  }
`;
