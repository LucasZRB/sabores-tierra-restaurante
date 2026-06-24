import { SectionTitle } from '../Productos/Productos.styles';
import { ContactLayout, Form, InputGroup, Label, Input, TextArea, SubmitButton, ContactGrid, Row, ResetButton, InfoSection, InfoTitle, InfoBlock, SocialSection } from './Contacto.styles';

export const Contacto = () => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <ContactLayout>
      <SectionTitle>Contacto</SectionTitle>

      <ContactGrid>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor='nombre'>Nombre Completo</Label>
            <Input type="text" id="nombre" name="nombre" placeholder="Introduce Nombre y Apellido" required maxLength={100} />
          </InputGroup>

          <Row>
            <InputGroup>
              <Label htmlFor="ciudad">Ciudad</Label>
              <Input type="text" id="ciudad" name="ciudad" required maxlength={50} placeholder='Bahia Blanca' />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="provincia">Provincia</Label>
              <Input type="text" id="provincia" name="provincia" required maxlength={50} placeholder='Buenos Aires' />
            </InputGroup>
          </Row>

          <InputGroup>
            <Label htmlFor="domicilio">Domicilio</Label>
            <Input type="text" id="domicilio" name="domicilio" required maxlength={100} placeholder='Avenida Simpre Viva 1234' />
          </InputGroup>

          <Row>
            <InputGroup>
              <Label htmlFor="telefono">Teléfono</Label>
              <Input type="tel" id="telefono" name="telefono" required pattern="[0-9]{10,15}" placeholder='Ej: 2911234567' />
            </InputGroup>

          <InputGroup>
            <Label htmlFor="correo">Correo Electrónico</Label>
            <Input type="email" id="correo" name="correo" required placeholder="correo@ejemplo.com" />
          </InputGroup>
          </Row>

          <InputGroup>
            <Label htmlFor="mensaje">Mensaje</Label>
            <TextArea id="mensaje" name="mensaje" rows="5" required placeholder="¿En qué te podemos ayudar?" />
          </InputGroup>

          <SubmitButton type="submit">Enviar Mensaje</SubmitButton>
          <ResetButton type="reset">Borrar</ResetButton>
        </Form>

        <InfoSection>
          <InfoTitle>Información del restaurante</InfoTitle>

          <InfoBlock>
            <strong>Dirección</strong>
            <p>Av. Gastronómica 1452, CABA</p>
          </InfoBlock>

          <InfoBlock>
            <strong>Teléfono para Reservas</strong>
            <p>+54 11 4444-5555</p>
          </InfoBlock>

          <InfoBlock>
            <strong>Horarios</strong>
            <p>Mar a Sáb: 12 a 16 / 20 a 00</p>
            <p>Dom: 12 a 17</p>
          </InfoBlock>

          <SocialSection>
            <h2>Nuestras redes sociales</h2>

            <ul>
              <li><a href="#facebook">Facebook: @SaboresdelaTierra</a></li>
              <li><a href="#instagram">Instagram: @SaboresDeLaTierra</a></li>
              <li><a href="#twitter">Twitter: @saboresdelatierra</a></li>
              <li><a href="#whatsapp">WhatsApp: +54 291 1234567</a></li>
              <li><a href="#tripadvisor">TripAdvisor</a></li>
            </ul>
          </SocialSection>
        </InfoSection>
      </ContactGrid>
    </ContactLayout>
  )
}
