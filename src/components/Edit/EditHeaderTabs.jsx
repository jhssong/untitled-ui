import styled from "styled-components";
import PropTypes from "prop-types";

const EditHeaderTabsLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

const HeaderTabsBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const HeaderTabBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  cursor: pointer;
`;

const HeaderTabText = styled.span`
  padding: 0px 0.25rem 1rem 0.25rem;
  ${({ theme }) => theme.texts.textSM}
  font-weight: ${({ theme }) => theme.weights.semiBold};
  color: ${({ theme, $selected }) =>
    $selected ? theme.colors.brand700 : theme.colors.gray500};
`;

const HeaderTabBottomBorder = styled.div`
  width: 100%;
  height: ${({ $selected }) => ($selected ? `${2 / 16}rem` : "0")};
  background-color: ${({ theme }) => theme.colors.brand700};
`;

const EditHeaderTabsDivider = styled.div`
  width: 100%;
  height: 0.0625rem;
  background-color: ${({ theme }) => theme.colors.gray200};
`;

const EditHeaderTabs = ({ selectedTab, setSelectedTab }) => {
  return (
    <EditHeaderTabsLayout>
      <HeaderTabsBox>
        <HeaderTabBase onClick={() => setSelectedTab(0)}>
          <HeaderTabText $selected={selectedTab == 0}>개인정보</HeaderTabText>
          <HeaderTabBottomBorder $selected={selectedTab == 0} />
        </HeaderTabBase>
        <HeaderTabBase onClick={() => setSelectedTab(1)}>
          <HeaderTabText $selected={selectedTab == 1}>좌석</HeaderTabText>
          <HeaderTabBottomBorder $selected={selectedTab == 1} />
        </HeaderTabBase>
        <HeaderTabBase onClick={() => setSelectedTab(2)}>
          <HeaderTabText $selected={selectedTab == 2}>학부모</HeaderTabText>
          <HeaderTabBottomBorder $selected={selectedTab == 2} />
        </HeaderTabBase>
      </HeaderTabsBox>
      <EditHeaderTabsDivider />
    </EditHeaderTabsLayout>
  );
};

EditHeaderTabs.propTypes = {
  selectedTab: PropTypes.number.isRequired,
  setSelectedTab: PropTypes.func.isRequired,
};

export { EditHeaderTabs };
