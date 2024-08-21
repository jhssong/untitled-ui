import styled from "styled-components";
import PropTypes from "prop-types";

const FormSectionLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const FormContentBox = styled.div`
  display: flex;
  gap: 2rem;
`;

const FormTextBox = styled.div`
  min-width: 17.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormTitleText = styled.div`
  ${({ theme }) => theme.texts.textSM}
  font-weight: ${({ theme }) => theme.weights.semiBold};
  color: ${({ theme }) => theme.colors.gray700};
`;

const FormSupportingText = styled.div`
  ${({ theme }) => theme.texts.textSM}
  font-weight: ${({ theme }) => theme.weights.regular};
  color: ${({ theme }) => theme.colors.gray600};
`;

const FormChilderenBox = styled.div`
  width: 100%;
  max-width: 32rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: ${({ theme }) => theme.colors.gray500};
`;

const FormSection = ({ title, supporingText, children }) => {
  return (
    <FormSectionLayout>
      <FormContentBox>
        <FormTextBox>
          <FormTitleText>{title}</FormTitleText>
          <FormSupportingText>{supporingText}</FormSupportingText>
        </FormTextBox>
        <FormChilderenBox>{children}</FormChilderenBox>
      </FormContentBox>
    </FormSectionLayout>
  );
};

FormSection.propTypes = {
  title: PropTypes.string,
  supporingText: PropTypes.string,
  children: PropTypes.node,
};

export { FormSection };
