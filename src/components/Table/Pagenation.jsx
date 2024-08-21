import styled from "styled-components";
import PropTypes from "prop-types";

const PagenationLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 16px 24px;
  align-items: center;
`;

const PagenationActionsBox = styled.div`
  display: flex;
  gap: 12px;
`;

const PagenationActionButton = styled.div`
  display: flex;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.weights.semiBold};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray700};
  cursor: pointer;
`;

const PagenationPageText = styled.div`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.weights.medium};
  line-height: 20px;
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
