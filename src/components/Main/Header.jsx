import styled from "styled-components";
import PropTypes from "prop-types";
import { ButtonBase } from "../../styles/globalStyle";

const HeaderLayout = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  padding: 0px 32px;
`;

const HeaderTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const HeaderText = styled.div`
  ${({ theme }) => theme.texts.displaySM}
  font-weight: ${({ theme }) => theme.weights.semiBold};
  color: ${({ theme }) => theme.colors.gray900};
`;

const HeaderSupportingText = styled.div`
  ${({ theme }) => theme.texts.textMD}
  font-weight: ${({ theme }) => theme.weights.regular};
  color: ${({ theme }) => theme.colors.gray600};
`;

const HeaderActionsBox = styled.div`
  display: flex;
  gap: 12px;
  align-self: flex-start;
`;

const Header = ({ text, supportingText, buttonsData = [] }) => {
  return (
    <HeaderLayout>
      <HeaderTextBox>
        <HeaderText>{text}</HeaderText>
        <HeaderSupportingText>{supportingText}</HeaderSupportingText>
      </HeaderTextBox>
      <HeaderActionsBox>
        {buttonsData.map((item, index) => {
          return (
            <ButtonBase
              key={index}
              $isHighlighted={index == buttonsData.length - 1}
              onClick={item.onClick}
            >
              {item.icon}
              {item.value}
            </ButtonBase>
          );
        })}
      </HeaderActionsBox>
    </HeaderLayout>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  supportingText: PropTypes.string,
  buttonsData: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      icon: PropTypes.element,
    })
  ),
};

export { Header };
