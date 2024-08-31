import styled from "styled-components";
import PropTypes from "prop-types";
import { FormInput } from "./Edit/FormInput";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(16, 24, 40, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalLayout = styled.div`
  min-width: 18.75rem;
  max-width: 37.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 0.75rem;
  background-color: white;
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const ModalTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ModalTitle = styled.div`
  ${({ theme }) => theme.texts.textLG}
  font-weight: ${({ theme }) => theme.weights.semiBold};
  color: ${({ theme }) => theme.colors.gray900};
`;

const ModalSupportText = styled.div`
  ${({ theme }) => theme.texts.textSM}
  font-weight: ${({ theme }) => theme.weights.regular};
  color: ${({ theme }) => theme.colors.gray600};
`;

const ModalActionsBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`;

const ModalActionsButton = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 0.625rem 1.125rem;
  ${({ theme }) => theme.texts.textMD}
  font-weight: ${({ theme }) => theme.weights.semiBold};
  color: ${({ theme, $isConfirmBtn }) =>
    $isConfirmBtn ? theme.colors.white : theme.colors.gray700};
  background-color: ${({ theme, $isConfirmBtn }) =>
    $isConfirmBtn ? theme.colors.brand600 : theme.colors.white};
  border: 0.0625rem solid
    ${({ theme, $isConfirmBtn }) =>
      $isConfirmBtn ? theme.colors.brand600 : theme.colors.gray300};
  border-radius: 0.5rem;
  cursor: pointer;
`;

const Modal = ({
  showModal,
  Icon,
  title,
  supporingText,
  confirmText,
  handleConfirm,
  cancelText,
  handleCancel,
  handleModalBackdropClick,
  hasInputField = false,
  placeholder = "",
  value = "",
  handleChange = () => {},
}) => {
  return showModal ? (
    <ModalBackdrop onClick={handleModalBackdropClick}>
      <ModalLayout onClick={(e) => e.stopPropagation()}>
        <ModalBox>
          {Icon != null ? <Icon /> : null}
          <ModalTextBox>
            <ModalTitle>{title}</ModalTitle>
            <ModalSupportText>{supporingText}</ModalSupportText>
          </ModalTextBox>
          {hasInputField && (
            <FormInput
              placeholder={placeholder}
              value={value}
              handleChange={handleChange}
            />
          )}
        </ModalBox>
        <ModalActionsBox>
          {cancelText && (
            <ModalActionsButton $isConfirmBtn={false} onClick={handleCancel}>
              {cancelText}
            </ModalActionsButton>
          )}
          {confirmText && (
            <ModalActionsButton $isConfirmBtn={true} onClick={handleConfirm}>
              {confirmText}
            </ModalActionsButton>
          )}
        </ModalActionsBox>
      </ModalLayout>
    </ModalBackdrop>
  ) : null;
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  Icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
  supporingText: PropTypes.string,
  confirmText: PropTypes.string,
  handleConfirm: PropTypes.func,
  cancelText: PropTypes.string,
  handleCancel: PropTypes.func,
  handleModalBackdropClick: PropTypes.func.isRequired,

  hasInputField: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export { Modal };
