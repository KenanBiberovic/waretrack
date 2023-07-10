import React from "react";
import NavigationBar from "./NavigationBar";
import * as ReactDOM from "react-dom";
import { Virtuoso } from "react-virtuoso";
import ReactVirtualizedTable from "./Table";
import { Typography } from "@mui/material";

function ListofItem() {
  return (
    <div>
      <NavigationBar />
      <Typography variant="h2" color="primary" gutterTop>
        Warehouse products
      </Typography>
      <ReactVirtualizedTable />
    </div>
  );
}

export default ListofItem;
