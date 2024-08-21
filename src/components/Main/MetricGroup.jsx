import styled from "styled-components";
import PropTypes from "prop-types";

const MetricGroupLayout = styled.div`
  display: flex;
  gap: 24px;
  padding: 0px 32px;
`;

const MetricItemBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
`;

const MetricItemHeaderText = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.weights.semiBold};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.gray900};
`;

const MetricItemText = styled.div`
  ${({ theme }) => theme.texts.textMD}
  font-weight: ${({ theme }) => theme.weights.semiBold};
  color: ${({ theme }) => theme.colors.gray900};
`;

const MetricGroup = ({ data }) => {
  return (
    <MetricGroupLayout>
      {data.map((item, index) => {
        return (
          <MetricItemBox key={index}>
            <MetricItemHeaderText>{item.title}</MetricItemHeaderText>
            <MetricItemText>{item.value}</MetricItemText>
          </MetricItemBox>
        );
      })}
    </MetricGroupLayout>
  );
};

MetricGroup.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
};

export { MetricGroup };
