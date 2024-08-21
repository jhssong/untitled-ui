import { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Pagenation from "./Pagenation";

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

const ColumnBox = styled.div`
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

const HeaderCellBoxText = styled.div`
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

const CellText = styled.div`
  ${({ theme }) => theme.texts.textSM}
  font-weight: ${({ theme }) => theme.weights.regular};
  color: ${({ theme }) => theme.colors.gray900};
`;

const CellSupportingText = styled.div`
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