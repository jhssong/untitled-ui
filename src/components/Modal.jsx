import styled from "styled-components";
import PropTypes from "prop-types";

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
  flex-direction: column;
  gap: 0.75rem;
`;

const ModalActionsButton = styled.div`
  display: flex;
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
  handleConfirm,
  handleCancel,
  handleModalBackdropClick,
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
        </ModalBox>
        <ModalActionsBox>
          <ModalActionsButton $isConfirmBtn={true} onClick={handleConfirm}>
            확인
          </ModalActionsButton>
          <ModalActionsButton $isConfirmBtn={false} onClick={handleCancel}>
            취소
          </ModalActionsButton>
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
  handleConfirm: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleModalBackdropClick: PropTypes.func.isRequired,
};

export { Modal };