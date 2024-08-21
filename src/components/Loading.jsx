import styled from "styled-components";
import PropTypes from "prop-types";

import LoadingIndicatorIcon from "../assets/icons/loading-indicator.svg?react";

const LoadingLayout = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(16, 24, 40, 0.7);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Loading = ({ isLoading }) => {
  return isLoading ? (
    <LoadingLayout>
      <LoadingIndicatorIcon />
    </LoadingLayout>
  ) : null;
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};

export { Loading };
