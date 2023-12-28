import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import { Rating } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { icons } from "src/helpers";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "var(--backgroundGreen)",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "var(--textParaGrey)",
  },
  "& .clickable": {
    cursor: "pointer",
  },
  "& .view": {
    textDecoration: "underline"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StyledRating = styled(Rating)(() => ({
  "& .MuiRating-iconFilled": {
    color: "var(--backgroundGreen)",
  },
}));

function ReviewTable({ rows, handleView, handleDelete }) {
  return (
    <Table aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Instructor Name</StyledTableCell>
          <StyledTableCell align="left">Consumer Name</StyledTableCell>
          <StyledTableCell align="left">Date</StyledTableCell>
          <StyledTableCell align="left">Rating </StyledTableCell>
          <StyledTableCell align="center">Review </StyledTableCell>
          <StyledTableCell align="center">Action </StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row._id}>
            <StyledTableCell component="th" scope="row">
              {row.instructorName}
            </StyledTableCell>
            <StyledTableCell align="left">{row.customerName}</StyledTableCell>
            <StyledTableCell align="left">{row.date}</StyledTableCell>
            <StyledTableCell align="left">
              <StyledRating
                name="size-small"
                defaultValue={0}
                size="small"
                value={row.rating}
                readOnly
              />
            </StyledTableCell>
            <StyledTableCell align="center">
              <span
                className="clickable view"
                onClick={() => handleView(row.review)}
              >
                View
              </span>
            </StyledTableCell>
            <StyledTableCell align="center">
              <img
                src={icons.binRed}
                onClick={() => handleDelete(row._id)}
                alt="Bin"
                width={"16px"}
                className="clickable"
              />
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ReviewTable;
