import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";
import { developers } from "../Store/Store";

const StyledTableHeaderCell = styled(TableCell, {
  name: "StyledTableHeaderCell"
})((props) => ({
  color: '#00008b',
  padding: 4,
  fontSize: 16
}));

const StyledTableBodyCell = styled(TableCell, {
  name: "StyledTableBodyCell"
})((props) => ({
  color: '#567d46',
  padding: 2,
  fontSize: 12
}));

const Output = (props) => {

  return (
    <TableContainer component={Paper} sx={{width: 'max-content', minWidth: 300, "&.MuiPaper-root": { backgroundColor: 'rgba(236, 236, 236, 0.5)'}}}>
        <Table aria-label="dev table">
          <TableHead>
            <TableRow sx={{height: 35}}>
              <StyledTableHeaderCell width={200}>Name</StyledTableHeaderCell>
              <StyledTableHeaderCell width={150} align="left">
                Tech
              </StyledTableHeaderCell>
              <StyledTableHeaderCell width={150} align="left">
                Work Situation
              </StyledTableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {developers.map((row) => (
              <TableRow sx={{height: 30}} key={row.name}>
                <StyledTableBodyCell component="th" scope="row">
                  {row.name}
                </StyledTableBodyCell>
                <StyledTableBodyCell align="left">{row.tech}</StyledTableBodyCell>
                <StyledTableBodyCell align="left">{row.work}</StyledTableBodyCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default Output;
