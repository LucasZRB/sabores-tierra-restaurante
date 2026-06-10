import { SectionTitle } from '../Productos/Productos.styles';
import { ContactContainer, Form, InputGroup, Label, Input, TextArea, SubmitButton } from './Contacto.styles';

export const Contacto = () => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <ContactContainer>
      <SectionTitle>Contacto</SectionTitle>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>Nombre Completo</Label>
          <Input type="text" placeholder="Tu nombre" />
        </InputGroup>
        <InputGroup>
          <Label>Correo Electrónico</Label>
          <Input type="email" placeholder="correo@ejemplo.com" />
        </InputGroup>
        <InputGroup>
          <Label>Mensaje</Label>
          <TextArea placeholder="¿En qué te podemos ayudar?" />
        </InputGroup>
        <SubmitButton type="submit">Enviar Mensaje</SubmitButton>
      </Form>
    </ContactContainer>
  )
}
