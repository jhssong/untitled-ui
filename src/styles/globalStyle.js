import styled from "styled-components";

export const PageBox = styled.div`
  display: flex;
`;

export const MainBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 3rem;
  background-color: ${({ theme, $isEditMode }) =>
    !$isEditMode ? theme.colors.white : theme.colors.gray25};
`;

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 2rem;
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
  padding: 0.125rem 0.5rem;
  ${({ theme }) => theme.texts.textXS}
  font-weight: ${({ theme }) => theme.weights.medium};
  color: ${({ theme, $fontColor }) => theme.colors[$fontColor]};
  background-color: ${({ theme, $backgroundColor }) =>
    theme.colors[$backgroundColor]};
  border-radius: 1rem;
`;

export const VerticalDivider = styled.div`
  height: 100%;
  width: 0.0625rem;
  background-color: ${({ theme }) => theme.colors.gray200};
`;

export const HorizontalDivider = styled.div`
  width: 100%;
  height: 0.0625rem;
  background-color: ${({ theme }) => theme.colors.gray200};
`;

export const styledIcon = ({
  icon,
  iconWidth = "1.25rem",
  iconHeight = "1.25rem",
  strokeColor = "#344054",
}) => styled(icon)`
  width: ${iconWidth};
  height: ${iconHeight};
  path {
    stroke: ${strokeColor};
  }
`;
