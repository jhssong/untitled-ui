import { useState, useEffect, useCallback, Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Pagenation from "./Pagenation";
import { FiltersBar } from "./FiltersBar";

const ITEMS_PER_PAGE = 10;

const TableLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 0.75rem;
  border: 0.0625rem solid ${({ theme }) => theme.colors.gray200};
`;

const TableBox = styled.div`
  display: flex;
`;

const TableColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ $isFill }) => ($isFill ? 1 : null)};
`;

const HeaderCellBox = styled.div`
  height: 2.75rem;
  display: flex;
  gap: 0.25rem;
  align-items: center;
  padding: 0 1.5rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.gray200};
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  background-color: ${({ theme, $index }) =>
    $index % 2 == 0 ? theme.colors.gray50 : theme.colors.white};
`;

const HeaderCellBoxText = styled.span`
  ${({ theme }) => theme.texts.textXS}
  font-weight: ${({ theme }) => theme.weights.medium};
  color: ${({ theme }) => theme.colors.gray600};
`;

const CellBox = styled.div`
  height: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.5rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.gray200};
  background-color: ${({ theme, $index }) =>
    $index % 2 == 0 ? theme.colors.gray50 : theme.colors.white};
`;

const CellText = styled.span`
  ${({ theme }) => theme.texts.textSM}
  font-weight: ${({ theme }) => theme.weights.regular};
  color: ${({ theme }) => theme.colors.gray900};
`;

const CellSupportingText = styled.span`
  ${({ theme }) => theme.texts.textSM}
  font-weight: ${({ theme }) => theme.weights.regular};
  color: ${({ theme }) => theme.colors.gray600};
`;

const ButtonCellBox = styled.div`
  height: 4.5rem;
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;

const ButtonCellBase = styled.div`
  padding: 0.625rem;
  cursor: pointer;
`;

const Table = ({ originalData, tableBuilder, searchKeys }) => {
  const [content, setContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [prevSearchValue, setPrevSearchValue] = useState("");

  const _resetTableContent = useCallback(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const data = originalData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    setTotalPage(Math.ceil(originalData.length / ITEMS_PER_PAGE));
    setContent(tableBuilder(data));
  }, [currentPage, originalData, tableBuilder]);

  useEffect(() => {
    if (searchValue.length == 0) {
      _resetTableContent();
      return;
    }
    const searchedData = originalData.filter((item) => {
      const searchValues = searchValue.split(",").map((value) => value.trim());
      return searchValues.every((value) => {
        return searchKeys.some((key) => {
          return String(item[key]).includes(value);
        });
      });
    });
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const data = searchedData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    if (searchValue != prevSearchValue) setCurrentPage(1);
    setTotalPage(Math.ceil(searchedData.length / ITEMS_PER_PAGE));
    setContent(tableBuilder(data));
    setPrevSearchValue(searchValue);
  }, [
    _resetTableContent,
    originalData,
    searchValue,
    tableBuilder,
    searchKeys,
    currentPage,
    prevSearchValue,
  ]);

  const _buildTextCell = (cellData, index) => {
    return (
      <TableColumnBox $isFill={cellData.isFill} key={index}>
        <HeaderCellBox>
          <HeaderCellBoxText>{cellData.headerText}</HeaderCellBoxText>
        </HeaderCellBox>
        {cellData.content.map((item, index) => {
          return (
            <CellBox key={index} $index={index} onClick={item.onClick}>
              <CellText>{item.text}</CellText>
              <CellSupportingText>{item.supportingText}</CellSupportingText>
            </CellBox>
          );
        })}
      </TableColumnBox>
    );
  };

  const _buildButtonCell = (cellData, index) => {
    return (
      <TableColumnBox key={index}>
        <HeaderCellBox>
          <HeaderCellBoxText>{cellData.headerText}</HeaderCellBoxText>
        </HeaderCellBox>

        {cellData.content.map((item, index) => {
          return (
            <CellBox key={index} $index={index}>
              <ButtonCellBox>
                {item.buttons.map((button, buttonIndex) => (
                  <ButtonCellBase
                    key={buttonIndex}
                    onClick={item.actions[buttonIndex]}
                  >
                    {button}
                  </ButtonCellBase>
                ))}
              </ButtonCellBox>
            </CellBox>
          );
        })}
      </TableColumnBox>
    );
  };

  const _buildBadgeCell = (cellData, index) => {
    return (
      <TableColumnBox key={index}>
        <HeaderCellBox>
          <HeaderCellBoxText>{cellData.headerText}</HeaderCellBoxText>
        </HeaderCellBox>

        {cellData.content.map((item, index) => {
          return (
            <CellBox key={index} $index={index} onClick={item.onClick}>
              {item.badge}
            </CellBox>
          );
        })}
      </TableColumnBox>
    );
  };

  const _buildCustomCell = (cellData, index) => {
    return (
      <TableColumnBox key={index}>
        <HeaderCellBox>
          <HeaderCellBoxText>{cellData.headerText}</HeaderCellBoxText>
        </HeaderCellBox>
        {cellData.customCell}
      </TableColumnBox>
    );
  };

  return (
    <>
      <FiltersBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <TableLayout>
        <TableBox>
          {content.map((item, index) => {
            if (item.isButton) return _buildButtonCell(item, index);
            else if (item.isBadge) return _buildBadgeCell(item, index);
            else if (item.isCustomCell) return _buildCustomCell(item, index);
            else return _buildTextCell(item, index);
          })}
        </TableBox>
        <Pagenation
          currentPage={currentPage}
          totalPage={totalPage}
          onPageChange={(newPage) => setCurrentPage(newPage)}
        />
      </TableLayout>
    </>
  );
};

Table.propTypes = {
  originalData: PropTypes.array.isRequired,
  tableBuilder: PropTypes.func.isRequired,
  searchKeys: PropTypes.array.isRequired,
};

export { Table, Pagenation };
