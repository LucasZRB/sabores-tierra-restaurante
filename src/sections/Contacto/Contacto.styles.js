import styled, { css } from 'styled-components';

export const ContactContainer = styled.section`
  max-width: 800px;
  margin: 60px auto;
  padding: 0 20px;
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

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.btnNormal};
  color: ${({ theme }) => theme.colors.textoPrincipal};
  padding: 15px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
