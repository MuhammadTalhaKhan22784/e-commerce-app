import { Box } from "@material-ui/core";
import React from "react";
import SideBar from "../../Components/SideBar";
import DataTable from "../../Components/Table/QuoteTable";
import "./Quote.css";
const Quote = () => {
  return (
    <React.Fragment>
      <SideBar />
      <Box className="quote_section">
        <Box className="qu_box">
          <Box>
            <span>Total List Price</span>
            <strong>$55,526.03</strong>
          </Box>
        </Box>
        <Box className="qu_table">
          <DataTable />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Quote;
