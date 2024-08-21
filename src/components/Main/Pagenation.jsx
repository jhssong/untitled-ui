import styled from "styled-components";
import PropTypes from "prop-types";

const PagenationLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1.5rem 1rem 1.5rem;
  align-items: center;
`;

const PagenationActionsBox = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const PagenationActionButton = styled.div`
  display: flex;
  padding: 0.5rem 0.875rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.texts.textSM}
  font-weight: ${({ theme }) => theme.weights.semiBold};
  color: ${({ theme }) => theme.colors.gray700};
  cursor: pointer;
`;

const PagenationPageText = styled.span`
  ${({ theme }) => theme.texts.textSM}
  font-weight: ${({ theme }) => theme.weights.medium};
  color: ${({ theme }) => theme.colors.gray700};
`;

const Pagenation = ({ currentPage = 1, totalPage = 1, onPageChange }) => {
  const _handlePreviousClick = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const _handleNextClick = () => {
    if (currentPage < totalPage) onPageChange(currentPage + 1);
  };

  return (
    <PagenationLayout>
      <PagenationActionsBox>
        <PagenationActionButton onClick={_handlePreviousClick}>
          이전
        </PagenationActionButton>
        <PagenationActionButton onClick={_handleNextClick}>
          다음
        </PagenationActionButton>
      </PagenationActionsBox>
      <PagenationPageText>
        페이지 {currentPage} of {totalPage}
      </PagenationPageText>
    </PagenationLayout>
  );
};

Pagenation.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagenation;
