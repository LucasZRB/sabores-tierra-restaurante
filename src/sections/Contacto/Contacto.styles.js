import styled, { css } from 'styled-components';

export const ContactLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  width: 100%;
  max-width: 1100px;
  margin-top: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.grises.oscuro};
  padding: 40px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grises.medio};
`;

export const Row = styled.div`
  display: flex;
  gap: 20px;

  > div {
    flex: 1;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.textoSecundario};
  font-size: 0.9rem;
`;

const estilosInput = css`
  background: #111;
  border: 1px solid ${({ theme }) => theme.colors.detalles};
  padding: 12px;
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.nunito};
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Input = styled.input`
  ${estilosInput}
`;

export const TextArea = styled.textarea`
  min-height: 120px;
  resize: vertical;
  ${estilosInput}
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

export const SubmitButton = styled.button`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.btnNormal};
  color: ${({ theme }) => theme.colors.textoPrincipal};
  padding: 12px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const ResetButton = styled.button`
  flex: 1;
  padding: 12px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.detalles};
  color: ${({ theme }) => theme.colors.textoSecundario};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  color: ${({ theme }) => theme.colors.textoSecundario};
`;

export const InfoTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.teko};
  color: ${({ theme }) => theme.colors.detalles};
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  strong {
    color: ${({ theme }) => theme.colors.accent};
    font-family: ${({ theme }) => theme.fonts.montserrat};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textoSecundario};
  }
`;

export const SocialSection = styled.div`
  margin-top: 20px;

  h2 {
    font-family: ${({ theme }) => theme.fonts.teko};
    color: ${({ theme }) => theme.colors.detalles};
    margin-bottom: 12px;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  li {
    color: ${({ theme }) => theme.colors.textoSecundario};
  }

  a {
    color: ${({ theme }) => theme.colors.textoSecundario};
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;
