import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Ballot = () => {
  const rows = [
    {
      id: 101,
      name: "John Doe",
      seat: "Chair",
      sem: 7,
    },
    {
      id: 103,
      name: "Joe Den",
      seat: "Secretary",
      sem: 7,
    },
    {
      id: 102,
      name: "Jon Doe",
      seat: "Vice Chair",
      sem: 7,
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell">Name</TableCell>
            <TableCell className="tablecell">Sem</TableCell>
            <TableCell className="tablecell">Seat</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className="tablecell">{row.name}</TableCell>
              <TableCell className="tablecell">{row.sem}</TableCell>
              <TableCell className="tablecell">{row.seat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Ballot;
