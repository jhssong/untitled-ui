import styled from "styled-components";
import PropTypes from "prop-types";

import SearchBar from "./SearchBar";

const FiltersBarLayout = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  border-radius: 0.5rem;
`;

const FiltersBarSearchBarBox = styled.div`
  max-width: 30rem;
  display: flex;
  flex: 1;
`;

const FiltersBar = ({ searchValue, setSearchValue }) => {
  return (
    <FiltersBarLayout>
      <FiltersBarSearchBarBox>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </FiltersBarSearchBarBox>
    </FiltersBarLayout>
  );
};

FiltersBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export { FiltersBar };
