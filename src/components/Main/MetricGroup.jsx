import styled from "styled-components";
import PropTypes from "prop-types";

const MetricGroupLayout = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 0rem 2rem;
`;

const MetricItemBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.colors.gray200};
`;

const MetricItemHeaderText = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.weights.semiBold};
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.gray900};
`;

const MetricItemText = styled.div`
  ${({ theme }) => theme.texts.displayMD}
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