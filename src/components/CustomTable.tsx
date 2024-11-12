import styled from "styled-components";
import { pixelToRem } from "@/utils";
import { CustomTableProps } from "@/types";

const TableWrapper = styled.div`
  overflow-x: auto;
  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;

    .ellipsis {
      display: block;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .ellipsis-sm {
      width: ${pixelToRem(300)};
    }

    .ellipsis-xs {
      width: ${pixelToRem(150)};
    }

    th,
    td {
      text-align: left;
      height: ${pixelToRem(48)};
      padding: 0 ${pixelToRem(8)} 0 0;
      &:last-child {
        text-align: right;
        padding: 0;
      }
    }

    th {
      color: ${({ theme }) => theme.typographies.subtitle};
      font-weight: 600;
    }

    tr {
      border-bottom: ${pixelToRem(1)} solid
        ${({ theme }) => theme.appDefaultStroke};
      &:last-child {
        border-bottom: none;
      }
    }
  }
`;

export function CustomTable({ headers, rows }: CustomTableProps) {
  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((data, indx) => (
                <td key={indx}>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
}
