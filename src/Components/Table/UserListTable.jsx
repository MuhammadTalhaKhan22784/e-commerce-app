import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// assets
import filLogo from "../../Assets/fil-logo.png";
import { Box } from "@material-ui/core";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#0075FF",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    borderBottom: "none",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "white",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#F9F9F9",
    },
  },
}))(TableRow);

function createData(name, plan, status) {
  return { name, plan, status };
}

const rows = [
  createData(
    <Box
      width="200px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <img src={filLogo} />
      <Box className="ul_text_1">
        <strong>Photo Polka</strong> <br />
        <span>Travel Agency</span>
      </Box>
    </Box>,
    "Monthly",
    "Active"
  ),
  createData(
    <Box
      width="200px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <img src={filLogo} />
      <Box className="ul_text_1">
        <strong>Photo Polka</strong> <br />
        <span>Travel Agency</span>
      </Box>
    </Box>,
    "Monthly",
    "Active"
  ),
  createData(
    <Box
      width="200px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <img src={filLogo} />
      <Box className="ul_text_1">
        <strong>Photo Polka</strong> <br />
        <span>Travel Agency</span>
      </Box>
    </Box>,
    "Monthly",
    "Active"
  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});

export default function UserListTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow style={{ borderRadius: "6px 6px 0px 0px" }}>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Plan</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.plan}</StyledTableCell>
              <StyledTableCell>{row.status}</StyledTableCell>
                </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
