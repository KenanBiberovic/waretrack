import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { db } from "./Firebase-config";
import {
  collection,
  doc,
  getDocs,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { getQuoteById } from "./Firebase-config";

// ...

export default function BasicTable() {
  const [product, setProduct] = useState([]);

  const deleteProduct = async (id) => {
    const productDoc = doc(db, "product", id);
    await deleteDoc(productDoc);
    window.location.reload();
  };
  //
  // useEffect(() => {
  //   const getQuoteById = async (id) => {
  //     const docRef = doc(db, "quotes", id);
  //     const docSnap = await getDoc(docRef);
  //     const data = docSnap.data();

  //     return { ...data, id: id };
  //   };

  //   getQuoteById();
  // }, []);

  const getQuoteById = async (id) => {
    const docRef = doc(db, "quotes", id);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();

    return { ...data, id: id };
  };

  useEffect(() => {
    const getProduct = async () => {
      const productCollectionRef = collection(db, "product");
      const data = await getDocs(productCollectionRef);
      setProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProduct();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 750 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Place</TableCell>
            <TableCell align="right">Production Date</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.model}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.place}</TableCell>
              <TableCell align="right">{row.productionDate}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <Button variant="text" onClick={getQuoteById()}>
                Edit
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  deleteProduct(row.id);
                }}
              >
                Delete
              </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
