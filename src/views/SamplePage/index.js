import React, { useState, useEffect } from "react";
import { Typography, Pagination } from "@mui/material";

// project imports
import MainCard from "ui-component/cards/MainCard";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function SamplePage() {
  const baseUrl = "http://localhost:5001/";
  const [products, setProducts] = useState([]);
  console.log(products);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  useEffect(() => {
    fetch("http://localhost:5001/api/v1/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.allProducts));
  }, [page]);
  const handleChange = (event, value) => {
    setPage(value);
    console.log(value, "balsal");
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Brand Name</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row.index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.productName}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.brandName}</TableCell>
              <TableCell align="left">{row.category}</TableCell>
              <img src={`${baseUrl}${row.images}`} />
              {/* <TableCell align="left">{row.images}</TableCell> */}
              {/* <TableCell align="left">{row.featured === false && 'NO'}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination count={10} page={page} onChange={handleChange} />
    </TableContainer>
  );
}

export default SamplePage;
