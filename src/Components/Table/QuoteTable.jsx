import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import { Box } from "@material-ui/core";
// assets
import itemS from "../../Assets/item1s.png";
import add from "../../Assets/Group 16559.svg";
import minus from "../../Assets/Group 16560.svg";
import deleteIcon from "../../Assets/delete-icon.png";
import settingIcon from "../../Assets/settings icon1.png";
import SettingDropdown from "../DropDown/SettingDropdown";

function createData(
  Image,
  Quantity,
  Name,
  Description,
  Manufacture,
  Size,
  Category,
  Application,
  ListPrice,
  Discount,
  DealerNet,
  Margin,
  DealerSell
) {
  return {
    Image,
    Quantity,
    Name,
    Description,
    Manufacture,
    Size,
    Category,
    Application,
    ListPrice,
    Discount,
    DealerNet,
    Margin,
    DealerSell,
  };
}

const rows = [
  createData(
    <Box className="qu_item1">
      <img src={itemS} />
    </Box>,
    <Box className="counter_td">
      <Box>
        <img src={minus} alt="..." />
        <span>1</span>
        <img src={add} alt="..." />
      </Box>
    </Box>,
    "Vision",
    "VL2428PBA",
    "Vision Rectangular Base...",
    "JSI",
    "	24 W x NA L x NA H x 8 D",
    "Tables",
    "Conference Tables",
    "$724.00",
    "10.0%",
    "$66.00",
    "0.8%",
    "$72.03"
  ),
  createData(
    <Box className="qu_item1">
      <img src={itemS} />
    </Box>,
    <Box className="counter_td">
      <Box>
        <img src={minus} alt="..." />
        <span>1</span>
        <img src={add} alt="..." />
      </Box>
    </Box>,
    "Vision",
    "VL2428PBA",
    "Vision Rectangular Base...",
    "JSI",
    "	24 W x NA L x NA H x 8 D",
    "Tables",
    "Conference Tables",
    "$724.00",
    "10.0%",
    "$66.00",
    "0.8%",
    "$72.03"
  ),
  createData(
    <Box className="qu_item1">
      <img src={itemS} />
    </Box>,
    <Box className="counter_td">
      <Box>
        <img src={minus} alt="..." />
        <span>1</span>
        <img src={add} alt="..." />
      </Box>
    </Box>,
    "Vision",
    "VL2428PBA",
    "Vision Rectangular Base...",
    "JSI",
    "	24 W x NA L x NA H x 8 D",
    "Tables",
    "Conference Tables",
    "$724.00",
    "10.0%",
    "$66.00",
    "0.8%",
    "$72.03"
  ),
  createData(
    <Box className="qu_item1">
      <img src={itemS} />
    </Box>,
    <Box className="counter_td">
      <Box>
        <img src={minus} alt="..." />
        <span>1</span>
        <img src={add} alt="..." />
      </Box>
    </Box>,
    "Vision",
    "VL2428PBA",
    "Vision Rectangular Base...",
    "JSI",
    "	24 W x NA L x NA H x 8 D",
    "Tables",
    "Conference Tables",
    "$724.00",
    "10.0%",
    "$66.00",
    "0.8%",
    "$72.03"
  ),
  createData(
    <Box className="qu_item1">
      <img src={itemS} />
    </Box>,
    <Box className="counter_td">
      <Box>
        <img src={minus} alt="..." />
        <span>1</span>
        <img src={add} alt="..." />
      </Box>
    </Box>,
    "Vision",
    "VL2428PBA",
    "Vision Rectangular Base...",
    "JSI",
    "	24 W x NA L x NA H x 8 D",
    "Tables",
    "Conference Tables",
    "$724.00",
    "10.0%",
    "$66.00",
    "0.8%",
    "$72.03"
  ),
  createData(
    <Box className="qu_item1">
      <img src={itemS} />
    </Box>,
    <Box className="counter_td">
      <Box>
        <img src={minus} alt="..." />
        <span>1</span>
        <img src={add} alt="..." />
      </Box>
    </Box>,
    "Vision",
    "VL2428PBA",
    "Vision Rectangular Base...",
    "JSI",
    "	24 W x NA L x NA H x 8 D",
    "Tables",
    "Conference Tables",
    "$724.00",
    "10.0%",
    "$66.00",
    "0.8%",
    "$72.03"
  ),
  createData(
    <Box className="qu_item1">
      <img src={itemS} />
    </Box>,
    <Box className="counter_td">
      <Box>
        <img src={minus} alt="..." />
        <span>1</span>
        <img src={add} alt="..." />
      </Box>
    </Box>,
    "Vision",
    "VL2428PBA",
    "Vision Rectangular Base...",
    "JSI",
    "	24 W x NA L x NA H x 8 D",
    "Tables",
    "Conference Tables",
    "$724.00",
    "10.0%",
    "$66.00",
    "0.8%",
    "$72.03"
  ),
  createData(
    <Box className="qu_item1">
      <img src={itemS} />
    </Box>,
    <Box className="counter_td">
      <Box>
        <img src={minus} alt="..." />
        <span>1</span>
        <img src={add} alt="..." />
      </Box>
    </Box>,
    "Vision",
    "VL2428PBA",
    "Vision Rectangular Base...",
    "JSI",
    "	24 W x NA L x NA H x 8 D",
    "Tables",
    "Conference Tables",
    "$724.00",
    "10.0%",
    "$66.00",
    "0.8%",
    "$72.03"
  ),
  createData(
    <Box className="qu_item1">
      <img src={itemS} />
    </Box>,
    <Box className="counter_td">
      <Box>
        <img src={minus} alt="..." />
        <span>1</span>
        <img src={add} alt="..." />
      </Box>
    </Box>,
    "Vision",
    "VL2428PBA",
    "Vision Rectangular Base...",
    "JSI",
    "	24 W x NA L x NA H x 8 D",
    "Tables",
    "Conference Tables",
    "$724.00",
    "10.0%",
    "$66.00",
    "0.8%",
    "$72.03"
  ),
  createData(
    <Box className="qu_item1">
      <img src={itemS} />
    </Box>,
    <Box className="counter_td">
      <Box>
        <img src={minus} alt="..." />
        <span>1</span>
        <img src={add} alt="..." />
      </Box>
    </Box>,
    "Vision",
    "VL2428PBA",
    "Vision Rectangular Base...",
    "JSI",
    "	24 W x NA L x NA H x 8 D",
    "Tables",
    "Conference Tables",
    "$724.00",
    "10.0%",
    "$66.00",
    "0.8%",
    "$72.03"
  ),
  createData(
    <Box className="qu_item1">
      <img src={itemS} />
    </Box>,
    <Box className="counter_td">
      <Box>
        <img src={minus} alt="..." />
        <span>1</span>
        <img src={add} alt="..." />
      </Box>
    </Box>,
    "Vision",
    "VL2428PBA",
    "Vision Rectangular Base...",
    "JSI",
    "	24 W x NA L x NA H x 8 D",
    "Tables",
    "Conference Tables",
    "$724.00",
    "10.0%",
    "$66.00",
    "0.8%",
    "$72.03"
  ),
  createData(
    <Box className="qu_item1">
      <img src={itemS} />
    </Box>,
    <Box className="counter_td">
      <Box>
        <img src={minus} alt="..." />
        <span>1</span>
        <img src={add} alt="..." />
      </Box>
    </Box>,
    "Vision",
    "VL2428PBA",
    "Vision Rectangular Base...",
    "JSI",
    "	24 W x NA L x NA H x 8 D",
    "Tables",
    "Conference Tables",
    "$724.00",
    "10.0%",
    "$66.00",
    "0.8%",
    "$72.03"
  ),
  createData(
    <Box className="qu_item1">
      <img src={itemS} />
    </Box>,
    <Box className="counter_td">
      <Box>
        <img src={minus} alt="..." />
        <span>1</span>
        <img src={add} alt="..." />
      </Box>
    </Box>,
    "Vision",
    "VL2428PBA",
    "Vision Rectangular Base...",
    "JSI",
    "	24 W x NA L x NA H x 8 D",
    "Tables",
    "Conference Tables",
    "$724.00",
    "10.0%",
    "$66.00",
    "0.8%",
    "$72.03"
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "Image",
    numeric: false,
    disablePadding: true,
    label: "Image",
  },
  { id: "Quantity", numeric: true, disablePadding: false, label: "Quantity" },
  { id: "Name", numeric: true, disablePadding: false, label: "Name" },
  {
    id: "Description",
    numeric: true,
    disablePadding: false,
    label: "Description",
  },
  {
    id: "Manufacture",
    numeric: true,
    disablePadding: false,
    label: "Manufacture",
  },
  { id: "Size", numeric: true, disablePadding: false, label: "Size" },
  { id: "Category", numeric: true, disablePadding: false, label: "Category" },
  {
    id: "Application",
    numeric: true,
    disablePadding: false,
    label: "Application",
  },
  {
    id: "Discount",
    numeric: true,
    disablePadding: false,
    label: "Discount",
  },
  {
    id: "ListPrice",
    numeric: true,
    disablePadding: false,
    label: "List Price",
  },
  { id: "DealerNet", numeric: true, disablePadding: false, label: "DealerNet" },
  { id: "Margin", numeric: true, disablePadding: false, label: "Margin %" },
  {
    id: "DealerSell",
    numeric: true,
    disablePadding: false,
    label: "Dealer Sell",
  },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            // align={headCell.numeric ? "right" : "left"}
            // padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  // title: {
  //   flex: "1 1 100%",
  // },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;
  // console.log(props , 'custom')

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <Box display="flex" alignItems="center">
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
        <Box className="c_line"></Box>
        <Tooltip title="Delete" className="delete_icon_b">
          <IconButton aria-label="delete">
            <img src={deleteIcon} alt="..." />
            <span>Delete</span>
          </IconButton>
        </Tooltip>
      </Box>
      <Box className="pagination_b">
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          // rowsPerPageOptions={false}
          component="div"
          count={rows.length}
          rowsPerPage={props.perPage}
          page={props.page}
          labelRowsPerPage={`Total Rows${"(3010)"}`}
          onChangePage={props.handleChangePage}
          onChangeRowsPerPage={props.handleChangeRowsPerPage}
        />
        <Box display="flex">
          <SettingDropdown />
        </Box>
      </Box>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function DataTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("Name");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);

      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //   const handleChangeDense = (event) => {
  //     setDense(event.target.checked);
  //   };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar
          perPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          numSelected={selected.length}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.Image);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.Image}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) => handleClick(event, row.Image)}
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell>

                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.Image}
                      </TableCell>
                      <TableCell>{row.Quantity}</TableCell>
                      <TableCell>{row.Name}</TableCell>
                      <TableCell>{row.Description}</TableCell>
                      <TableCell>{row.Manufacture}</TableCell>
                      <TableCell>{row.Size}</TableCell>
                      <TableCell>{row.Category}</TableCell>
                      <TableCell>{row.Application}</TableCell>
                      <TableCell>{row.ListPrice}</TableCell>
                      <TableCell>{row.Discount}</TableCell>
                      <TableCell>{row.DealerNet}</TableCell>
                      <TableCell>{row.Margin}</TableCell>
                      <TableCell>{row.DealerSell}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </div>
  );
}
