import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
`;

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 32px;
  padding-bottom: 48px;
  background-color: ${({ theme, $isEditMode }) =>
    !$isEditMode ? theme.colors.white : theme.colors.gray25};
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0px 32px;
`;

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

export const BadgeBase = styled.div`
  display: inline-flex;
  width: fit-content;
  padding: 2px 8px;
  ${({ theme }) => theme.texts.textXS}
  font-weight: ${({ theme }) => theme.weights.medium};
  color: ${({ theme, $fontColor }) => theme.colors[$fontColor]};
  background-color: ${({ theme, $backgroundColor }) =>
    theme.colors[$backgroundColor]};
  border-radius: 16px;
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
