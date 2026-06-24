import { FooterContainer, Copyright } from './Footer.styles';

export function Footer() {
  return (
    <FooterContainer>
      <Copyright>
        <p>
          &copy; {new Date().getFullYear()}
          Sabores de la Tierra. |
          Todos los derechos reservados.
          </p>
        <p>Bahía Blanca, Buenos Aires, Argentina.</p>
      </Copyright>
    </FooterContainer>
  );
}
