import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import UserRequest from "../../Request/UserRequest";

export default function AdminUsers() {
  const [columns] = useState([
    {
      Header: "Name",
      accessor: "username",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    { Header: "Admin", accessor: "isAdmin" },
  ]);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserRequest.getUsers().then((res) => {
      setUsers(res.data);
    });
  }, []);

  const tableInstance = useTable({ columns, data: users });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>
      <div className="text-2xl font-bold mx-2 my-3">Users</div>
      <table
        className="table-auto block md:table w-full overflow-auto"
        {...getTableProps()}
      >
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr
                  className="even:bg-gray-100 bg-opacity-60 hover:bg-gray-100"
                  {...row.getRowProps()}
                >
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td
                          className="p-3 text-center text-gray-500"
                          {...cell.getCellProps()}
                        >
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}
