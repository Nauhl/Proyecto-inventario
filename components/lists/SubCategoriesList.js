import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function SubCategoriesList(props) {

  const { allSubCategories } = props;

  return allSubCategories && allSubCategories.length > 0 ? (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <h2>Subcategories</h2>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allSubCategories.map(subCategory => {
            return (
              <TableRow key={subCategory._id}>
                <TableCell component="th" scope="row">{subCategory.name}</TableCell>
                <TableCell align="right"             >{subCategory.description}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
      <>
      </>
    );
}