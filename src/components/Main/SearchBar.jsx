import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { SearchMd } from "@untitled-ui/icons-react";

import { styledIcon } from "../../styles/globalStyle";

const SearchBarLayout = styled.div`
  display: flex;
  flex: 1;
  gap: 0.5rem;
  padding: 0.625rem 0.875rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.colors.gray300};
  border: 0.0625rem solid
    ${({ theme, $focused }) =>
      $focused ? theme.colors.brand300 : theme.colors.gray300};
  ${({ theme }) => theme.texts.textMD}
  font-weight: ${({ theme }) => theme.weights.regular};
  color: ${({ theme, $focused }) =>
    $focused ? theme.colors.gray900 : theme.colors.gray500};
  box-shadow: ${({ $focused, theme }) =>
    $focused
      ? `0 0 0.25rem ${theme.colors.brand100}, 0 0.0625rem 0.125rem rgba(16, 24, 40, 0.05)`
      : "none"};
`;

const SearchIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
`;

const SearchInputBox = styled.input`
  display: flex;
  width: 100%;
  border: 0;
  outline: none;
`;

const SearchIcon = styledIcon({ icon: SearchMd });

const SearchBar = ({ searchValue, setSearchValue }) => {
  const [focused, setFocused] = useState(false);

  return (
    <SearchBarLayout $focused={focused}>
      <SearchIconBox>
        <SearchIcon strokecolor='#667085' />
      </SearchIconBox>
      <SearchInputBox
        type='text'
        placeholder='이름을 입력하세요'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </SearchBarLayout>
  );
};

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default SearchBar;
