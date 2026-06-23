import { LogoContainer, LogoImg, MenuItems, NavContainer, NavItem, TextItem } from "./Navbar.styles"
import iconoBarra from '../../assets/iconoBarra.png'

export const Navbar = ({ currentScreen, setCurrentScreen }) => {
  return (
    <NavContainer>
      <LogoContainer>
        <LogoImg src={iconoBarra} alt="Tierra" />
      </LogoContainer>

      <MenuItems>
        <NavItem
          active={currentScreen === 'inicio'}
          onClick={() => setCurrentScreen('inicio')}
        >
          <TextItem>Inicio</TextItem>
        </NavItem>
        <NavItem
          active={currentScreen === 'productos' || currentScreen === 'detalle-producto'}
          onClick={() => setCurrentScreen('productos')}
        >
          <TextItem>Productos</TextItem>
        </NavItem>
        <NavItem
          active={currentScreen === 'contacto'}
          onClick={() => setCurrentScreen('contacto')}
        >
          <TextItem>Contacto</TextItem>
        </NavItem>
        <NavItem
          active={currentScreen === 'historia'}
          onClick={() => setCurrentScreen('historia')}
        >
          <TextItem>Nuestra Historia</TextItem>
        </NavItem>
      </MenuItems>
    </NavContainer>
  )
}
