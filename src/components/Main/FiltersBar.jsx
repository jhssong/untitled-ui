import styled from "styled-components";
import PropTypes from "prop-types";

import XIcon from "../../assets/icons/x.svg?react";
import FiltersLinesIcon from "../../assets/icons/filters-lines.svg?react";

import SearchBar from "./SearchBar";

const FiltersBarWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  border-radius: 0.5rem;
`;

const FiltersBarContent = styled.div`
  display: flex;
  flex: 1;
  gap: 0.75rem;
`;

const FiltersBarButtons = styled.div`
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

const FiltersBarSearchBarWrapper = styled.div`
  width: 20;
  display: flex;
`;

/**
 * FiltersBar
 * @param {boolean} hasFilters - Whether using filters or not
 * @param {string} filterList - List of filters (required when hasFilters is true)
 * @returns
 */
const FiltersBar = ({ hasFilters, filterList }) => {
  return (
    <FiltersBarWrapper>
      <FiltersBarContent>
        {hasFilters ? (
          <>
            {filterList.map((item, index) => {
              return (
                <FiltersBarButtons key={index}>
                  {item}
                  <XIcon />
                </FiltersBarButtons>
              );
            })}
            <FiltersBarButtons>
              <FiltersLinesIcon />
              필터
            </FiltersBarButtons>
          </>
        ) : null}
      </FiltersBarContent>
      <FiltersBarSearchBarWrapper>
        <SearchBar />
      </FiltersBarSearchBarWrapper>
    </FiltersBarWrapper>
  );
};

FiltersBar.propTypes = {
  hasFilters: PropTypes.bool.isRequired,
  filterList: PropTypes.array,
};

export { FiltersBar };
