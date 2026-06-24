import { CTAButton, Description, EmotionalText, HeroContainer, LogoMain } from './Inicio.styles'
import logoMain from '../../assets/icono1.png'

export const Inicio = () => {
  return (
    <HeroContainer>
      <LogoMain
        src={logoMain}
        alt='Restaurante: Sabores de la tierra'
      />
      <Description>
        Nuestro espacio rústico y acogedor da la bienvenida donde cada plato refleja la esencia de lo auténtico. Entre maderas, aromas y tradición, invitamos a disfrutar de una experiencia culinaria que celebra la calidez de la tierra y el placer de compartir.
      </Description>

      {/* Elije cuál más te guste */}
      <EmotionalText>
        Entre maderas, aromas y tradición, invitamos a vivir una experiencia culinaria que celebra la calidez de la tierra y el placer de compartir.
      </EmotionalText>
      <EmotionalText>
        Buscamos la perfección en cada fuego y la felicidad en cada plato. Sabores honestos para paladares exigentes.
      </EmotionalText>

      <CTAButton>Descubrir Productos</CTAButton>
    </HeroContainer>
  )
}
