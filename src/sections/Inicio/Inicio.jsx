import { CTAButton, Description, HeroContainer, Subtitle, Title } from './Inicio.styles'

export const Inicio = () => {
  return (
    <HeroContainer>
      <Title>Sabores de la tierra</Title>
      <Subtitle>Restaurante</Subtitle>
      <Description>
        Nuestro espacio rústico y acogedor da la bienvenida donde cada plato refleja la esencia de lo auténtico. Entre maderas, aromas y tradición, invitamos a disfrutar de una experiencia culinaria que celebra la calidez de la tierra y el placer de compartir.
      </Description>
      <CTAButton>Descubrir Productos</CTAButton>
    </HeroContainer>
  )
}
