import styled from "styled-components";
import PropTypes from "prop-types";
import { ButtonBase } from "../../styles/globalStyle";

const EditContentHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const EditContentHeaderSection = styled.div`
  display: flex;
  gap: 1rem;
`;

const EditContentHeaderText = styled.div`
  display: flex;
  flex: 1;
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

const EditContentHeader = ({ title, onCancel, onSubmit, isEditMode }) => {
  return (
    <EditContentHeaderWrapper>
      <EditContentHeaderSection>
        <EditContentHeaderText>{title}</EditContentHeaderText>
        <EditContentHeaderActions>
          <ButtonBase onClick={onCancel}>취소</ButtonBase>
          <ButtonBase onClick={onSubmit} $isHighlighted={true}>
            {isEditMode ? "수정" : "저장"}
          </ButtonBase>
        </EditContentHeaderActions>
      </EditContentHeaderSection>
      <EditContainerDivider />
    </EditContentHeaderWrapper>
  );
};

EditContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  isEditMode: PropTypes.bool,
};

export { EditContentHeader };
