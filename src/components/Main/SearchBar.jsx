import { useState } from "react";
import styled from "styled-components";

import SearchIcon from "../../assets/icons/search.svg?react";

const SearchBarLayout = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border: 1px solid
    ${({ theme, $focused }) =>
      $focused ? theme.colors.brand300 : theme.colors.gray300};
  ${({ theme }) => theme.texts.textMD}
  font-weight: ${({ theme }) => theme.weights.regular};
  color: ${({ theme, $focused }) =>
    $focused ? theme.colors.gray900 : theme.colors.gray500};
  box-shadow: ${({ $focused, theme }) =>
    $focused
      ? `0px 0px 4px ${theme.colors.brand100}, 0px 1px 2px rgba(16, 24, 40, 0.05)`
      : "none"};
`;

const SearchIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;

const SearchInputBox = styled.input`
  display: flex;
  width: 100%;
  border: 0;
  outline: none;
`;

const SearchBar = () => {
  const [focused, setFocused] = useState(false);

  return (
    <SearchBarLayout $focused={focused}>
      <SearchIconBox>
        <SearchIcon />
      </SearchIconBox>
      <SearchInputBox
        type='text'
        placeholder='이름을 입력하세요'
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </SearchBarLayout>
  );
};

export default SearchBar;
