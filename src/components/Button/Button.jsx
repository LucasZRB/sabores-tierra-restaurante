import styled from 'styled-components';

// 1. Defines el componente con sus estilos utilizando styled.etiqueta``
export const Button = styled.button`
  background-color: #4ca6a4;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #3b8280;
  }
`;

export const ButtonActive = styled(Button)`
  border-radius: 20px;
  transition: all 0.5s ease
`;