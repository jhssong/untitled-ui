import { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Pagenation from "./Pagenation";

const ITEMS_PER_PAGE = 10;

const TableLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
`;

const TableBox = styled.div`
  display: flex;
`;

const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ $isFill }) => ($isFill ? 1 : null)};
`;

const HeaderCellBox = styled.div`
  height: 44px;
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 0 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: ${({ theme, $index }) =>
    $index % 2 == 0 ? theme.colors.gray50 : theme.colors.white};
`;

const HeaderCellBoxText = styled.div`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.weights.medium};
  line-height: 18px;
  color: ${({ theme }) => theme.colors.gray600};
`;

const CellBox = styled.div`
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  background-color: ${({ theme, $index }) =>
    $index % 2 == 0 ? theme.colors.gray50 : theme.colors.white};
`;

const CellText = styled.div`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.weights.regular};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray900};
`;

const CellSupportingText = styled.div`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.weights.regular};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray600};
`;

const ButtonCellBox = styled.div`
  height: 72px;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`;

const ButtonCellBase = styled.div`
  padding: 10px 10px;
  cursor: pointer;
`;

const Table = ({ originalData, tableBuilder }) => {
  const [content, SetContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const data = originalData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    setTotalPage(Math.ceil(originalData.length / ITEMS_PER_PAGE));
    SetContent(tableBuilder(data));
  }, [currentPage, originalData, tableBuilder]);

  const handlePageChange = (newPage) => setCurrentPage(newPage);

  const _buildTextCell = (cellData, index) => {
    return (
      <ColumnBox $isFill={cellData.isFill} key={index}>
        <HeaderCellBox>
          <HeaderCellBoxText>{cellData.headerText}</HeaderCellBoxText>
        </HeaderCellBox>
        {cellData.content.map((item, index) => {
          return (
            <CellBox key={index} $index={index}>
              <CellText>{item.text}</CellText>
              <CellSupportingText>{item.supportingText}</CellSupportingText>
            </CellBox>
          );
        })}
      </ColumnBox>
    );
  };

  const _buildButtonCell = (cellData, index) => {
    return (
      <ColumnBox key={index}>
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
      </ColumnBox>
    );
  };

  const _buildBadgeCell = (cellData, index) => {
    return (
      <ColumnBox key={index}>
        <HeaderCellBox>
          <HeaderCellBoxText>{cellData.headerText}</HeaderCellBoxText>
        </HeaderCellBox>

        {cellData.content.map((item, index) => {
          return (
            <CellBox key={index} $index={index}>
              {item}
            </CellBox>
          );
        })}
      </ColumnBox>
    );
  };

  return (
    <TableLayout>
      <TableBox>
        {content.map((item, index) => {
          if (item.isButton) return _buildButtonCell(item, index);
          else if (item.isBadge) return _buildBadgeCell(item, index);
          else return _buildTextCell(item, index);
        })}
      </TableBox>
      <Pagenation
        currentPage={currentPage}
        totalPage={totalPage}
        onPageChange={handlePageChange}
      />
    </TableLayout>
  );
};

Table.propTypes = {
  originalData: PropTypes.array,
  tableBuilder: PropTypes.func,
};

export { Table, Pagenation };
