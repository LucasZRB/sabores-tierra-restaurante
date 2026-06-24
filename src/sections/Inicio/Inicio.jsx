import { CTAButton, Description, EmotionalText, HeroContainer, LogoMain } from './Inicio.styles'
import logoMain from '../../assets/icono1.png'

export const Inicio = ({ onGo }) => {
  return (
    <HeroContainer>
      <LogoMain
        src={logoMain}
        alt='Restaurante: Sabores de la tierra'
      />
      <Description>
        Nuestro espacio rústico y acogedor da la bienvenida donde cada plato refleja la esencia de lo auténtico. Entre maderas, aromas y tradición, invitamos a disfrutar de una experiencia culinaria que celebra la calidez de la tierra y el placer de compartir.
      </Description>

      <EmotionalText>
        Entre maderas, aromas y tradición, invitamos a vivir una experiencia culinaria que celebra la calidez de la tierra y el placer de compartir.
      </EmotionalText>

      <CTAButton onClick={onGo}>Descubrir Productos</CTAButton>
    </HeroContainer>
  )
}
