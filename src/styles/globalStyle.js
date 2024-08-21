import styled from "styled-components";

export const ButtonBase = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: auto 0;
  padding: 0.625rem 1rem;
  border-radius: 0.5rem;
  ${({ theme }) => theme.texts.textSM}
  font-weight: ${({ theme }) => theme.weights.semiBold};
  color: ${({ theme, $isHighlighted }) =>
    $isHighlighted ? theme.colors.white : theme.colors.gray700};
  background-color: ${({ theme, $isHighlighted }) =>
    $isHighlighted ? theme.colors.brand600 : theme.colors.white};
  border: 0.0625rem solid
    ${({ theme, $isHighlighted }) =>
      $isHighlighted ? theme.colors.brand600 : theme.colors.gray300};
  cursor: pointer;
`;
