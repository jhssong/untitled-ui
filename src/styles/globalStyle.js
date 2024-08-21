import styled from "styled-components";

export const ButtonBase = styled.div`
  display: flex;
  gap: 8px;
  margin: auto 0;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  ${({ theme }) => theme.texts.textSM}
  font-weight: ${({ theme }) => theme.weights.semiBold};
  color: ${({ theme, $isHighlighted }) =>
    $isHighlighted ? theme.colors.white : theme.colors.gray700};
  background-color: ${({ theme, $isHighlighted }) =>
    $isHighlighted ? theme.colors.brand600 : theme.colors.white};
  border: 1px solid
    ${({ theme, $isHighlighted }) =>
      $isHighlighted ? theme.colors.brand600 : theme.colors.gray300};
  cursor: pointer;
`;
