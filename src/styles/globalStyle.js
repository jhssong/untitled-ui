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

export const InputFieldBase = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  padding: 0.625rem 0.875rem;
  align-items: center;
  ${({ theme }) => theme.texts.textMD}
  font-weight: ${({ theme }) => theme.weights.regular};
  color: ${({ theme }) => theme.colors.gray900};
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.0625rem solid
    ${({ theme, $focused }) =>
      $focused ? theme.colors.brand300 : theme.colors.gray300};
  border-radius: 0.5rem;
  box-shadow: ${({ theme, $focused }) =>
    $focused
      ? `0 0 0.25rem ${theme.colors.brand100}, 0 0.0625rem 0.125rem rgba(16, 24, 40, 0.05)`
      : "none"};
`;

export const VerticalDivider = styled.div`
  height: 100%;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.gray200};
`;

export const HorizontalDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray200};
`;
