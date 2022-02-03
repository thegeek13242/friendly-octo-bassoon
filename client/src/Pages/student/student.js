import React from "react";
import "./student.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const mytheme = createTheme({
  palette: {
    primary: {
      main: "#393086",
    },
    secondary: {
      main: "#CF5924",
    },
    darkGrey: "#484c54",
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: mytheme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableCellCGPA = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: mytheme.palette.darkGrey,
    color: theme.palette.common.white,
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(semester, sgpa) {
  return { semester, sgpa };
}

const rows = [
  createData("Sem1", "$SG1"),
  createData("Sem2", "$SG2"),
  createData("Sem3", "$SG3"),
  createData("Sem4", "$SG4"),
  createData("Sem5", "$SG5"),
  createData("Sem6", "$SG6"),
  createData("Sem7", "$SG7"),
  createData("Sem8", "$SG8"),
];

const Student = () => {
  return (
    <>
      <div className="student-container">
        <div className="student-heading">
          <h1>Welcome! $Name</h1>
        </div>
        <div className="student-body">
          <div className="nameEnr">
            <p>Name: $Name</p>
            <p>Enrolment Number: $BTnum</p>
          </div>
          <div className="sgpa">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 450 }} aria-label="sgpa-cgpa-table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Semester</StyledTableCell>
                    <StyledTableCell align="right">SGPA</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.semester}>
                      <StyledTableCell component="th" scope="row">
                        {row.semester}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.sgpa}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                  <StyledTableRow>
                    <StyledTableCellCGPA component="th" scope="row">
                      <b>CGPA</b>
                    </StyledTableCellCGPA>
                    <StyledTableCellCGPA align="right">
                      <b>$CGPA</b>
                    </StyledTableCellCGPA>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <h3 className="dnHead">Downloads: </h3>
          <div className="downloads">
            <Button
              sx={{ margin: "1rem", width: "10rem", marginLeft: "3rem" }}
              label="degree"
              variant="contained"
            >
              Degree
            </Button>
            <Button
              sx={{ margin: "1rem", width: "10rem" }}
              label="transcript"
              variant="contained"
            >
              Transcript
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
