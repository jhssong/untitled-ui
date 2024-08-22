import styled from "styled-components";
import PropTypes from "prop-types";
// import { X, FilterLines } from "@untitled-ui/icons-react";

import SearchBar from "./SearchBar";

// import { withStyledIcon } from "../../styles/globalStyle";

const FiltersBarLayout = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  border-radius: 0.5rem;
`;

const FiltersBarRow = styled.div`
  display: flex;
  flex: 1;
  gap: 0.75rem;
`;

// eslint-disable-next-line no-unused-vars
const FiltersBarButton = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0.625rem 1rem;
  ${({ theme }) => theme.texts.textSM}
  font-weight: ${({ theme }) => theme.weights.semiBold};
  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.colors.gray300};
`;

const FiltersBarSearchBarBox = styled.div`
  display: flex;
`;

// const XIcon = withStyledIcon(X);
// const FiltersLinesIcon = withStyledIcon(FilterLines);

const FiltersBar = ({
  // hasFilters,
  // filterList,
  searchValue,
  setSearchValue,
}) => {
  return (
    <FiltersBarLayout>
      <FiltersBarRow>
        {/* {hasFilters ? (
          <>
            {filterList.map((item, index) => {
              return (
                <FiltersBarButton key={index}>
                  {item}
                  <XIcon />
                </FiltersBarButton>
              );
            })}
            <FiltersBarButton>
              <FiltersLinesIcon />
              필터
            </FiltersBarButton>
          </>
        ) : null} */}
      </FiltersBarRow>
      <FiltersBarSearchBarBox>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </FiltersBarSearchBarBox>
    </FiltersBarLayout>
  );
};

FiltersBar.propTypes = {
  // hasFilters: PropTypes.bool.isRequired,
  // filterList: PropTypes.array,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export { FiltersBar };
