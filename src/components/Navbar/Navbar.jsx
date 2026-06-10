import { Logo, MenuItems, NavContainer, NavItem } from "./Navbar.styles"

export const Navbar = ({ currentScreen, setCurrentScreen }) => {
  return (
    <NavContainer>
      <Logo>TIERRA</Logo>
      <MenuItems>
        <NavItem
          active={currentScreen === 'inicio'}
          onClick={() => setCurrentScreen('inicio')}
        >
          Inicio
        </NavItem>
        <NavItem
          active={currentScreen === 'productos' || currentScreen === 'detalle-producto'}
          onClick={() => setCurrentScreen('productos')}
        >
          Productos
        </NavItem>
        <NavItem
          active={currentScreen === 'contacto'}
          onClick={() => setCurrentScreen('contacto')}
        >
          Contacto
        </NavItem>
        <NavItem
          active={currentScreen === 'historia'}
          onClick={() => setCurrentScreen('historia')}
        >
          Nuestra Historia
        </NavItem>
      </MenuItems>
    </NavContainer>
  )
}
