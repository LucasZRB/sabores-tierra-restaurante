import { FooterContainer, FooterGrid, FooterColumn, SocialLinks, Copyright } from './Footer.styles';

export function Footer() {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <h3>Nuestra Casa</h3>
          <p>
            Buscamos la perfección en cada fuego y la felicidad en cada plato. Sabores honestos para paladares exigentes.
          </p>
        </FooterColumn>

        <FooterColumn>
          <h3>Horarios de Cocina</h3>
          <p>Martes a Sábados:<br /> 12:00 a 16:00 | 20:00 a 00:00</p>
          <p>Domingos:<br /> 12:00 a 17:00</p>
        </FooterColumn>

        <FooterColumn>
          <h3>Encuéntranos</h3>
          <p>Av. Gastronómica 1452, Ciudad de Buenos Aires</p>
          <p>Reservas: +54 11 4444-5555</p>
        </FooterColumn>

        <FooterColumn>
          <h3>Comunidad</h3>
          <SocialLinks>
            <a href="#instagram">Instagram</a>
            <a href="#facebook">Facebook</a>
            <a href="#tripadvisor">TripAdvisor</a>
          </SocialLinks>
        </FooterColumn>
      </FooterGrid>

      <Copyright>
        &copy; {new Date().getFullYear()} Sabores de la Tierra. Todos los derechos reservados.
      </Copyright>
    </FooterContainer>
  );
}
