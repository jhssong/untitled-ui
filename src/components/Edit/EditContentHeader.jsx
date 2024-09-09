import styled from "styled-components";
import PropTypes from "prop-types";
import { ButtonBase } from "../../styles/globalStyle";

const EditContentHeaderLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const EditContentHeaderSection = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

const EditContentHeaderText = styled.span`
  ${({ theme }) => theme.texts.textLG}
  font-weight: ${({ theme }) => theme.weights.semiBold};
  color: ${({ theme }) => theme.colors.gray900};
`;

const EditContentHeaderActions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const EditContainerDivider = styled.div`
  width: 100%;
  height: 0.0625rem;
  background-color: ${({ theme }) => theme.colors.gray200};
`;

const EditContentHeader = ({ title, buttonsData = [] }) => {
  return (
    <EditContentHeaderLayout>
      <EditContentHeaderSection>
        <EditContentHeaderText>{title}</EditContentHeaderText>
        <EditContentHeaderActions>
          {buttonsData.map((item, index) => {
            return (
              <ButtonBase
                key={index}
                $isHighlighted={index == buttonsData.length - 1}
                onClick={item.onClick}
              >
                {item.value}
              </ButtonBase>
            );
          })}
        </EditContentHeaderActions>
      </EditContentHeaderSection>
      <EditContainerDivider />
    </EditContentHeaderLayout>
  );
};

EditContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  buttonsData: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ),
};

export { EditContentHeader };
