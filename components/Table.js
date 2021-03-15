import { useTable } from "react-table";
import { useMemo } from "react";
import Link from "next/link";

const Table = ({ list }) => {
  const columns = useMemo(
    () => [
      {
        Header: "Rank",
        accessor: "rank",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Symbol",
        accessor: "symbol",
      },
      {
        Header: "Volume",
        Cell: ({ cell: { row } }) => {
          if(row.original.details){
            return row.original.details.volume;
          }
          else {
            return ("no value fetched")
          }
        },
      },
      {
        Header: "24H variation",
        Cell: ({ cell: { row } }) => {
          if(row.original.details){
          const value = row.original.details.close -  row.original.details.open 
          return value;
          }
          else {
            return ("no value fetched")
          }
        },
      },
      {
        Header: "Click",
        accessor: "id",
        Cell: ({ cell: { row } }) => {
          return <Link href={`/cryptos/${row.original.id}`}>Link</Link>;
        },
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: list });

  return (
    <table {...getTableProps()} style={{ 
      border: "solid 1px blue"
       }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px red",
                  background: "aliceblue",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
