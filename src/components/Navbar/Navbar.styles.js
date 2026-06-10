import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.detalles};
  background-color: ${({ theme }) => theme.colors.bgPrincipal};
`;

export const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.teko};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.detalles};
`;

export const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
`;

export const NavItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: 600;
  cursor: pointer;
  
  /* Si la pestaña está activa, brilla con el color accent; si no, texto principal */
  color: ${({ active, theme }) => active ? theme.colors.accent : theme.colors.textoPrincipal};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
