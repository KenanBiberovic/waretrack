import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import "../Components/UI/Main.css";

import {
  TextField,
  Button,
  Box,
  Typography,
  useTheme,
  Switch,
  Card,
} from "@mui/material";
import { db } from "./Firebase-config";
import { collection, addDoc } from "firebase/firestore";

//
function Main() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [place, setPlace] = useState("");
  const [productionDate, setProductionDate] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const productCollectionRef = collection(db, "product");
  const createProduct = async () => {
    await addDoc(productCollectionRef, {
      name: name,
      type: type,
      place: place,
      productionDate: productionDate,
      quantity: quantity,
    });
  };
  return (
    <div style={{ marginBottom: "10px" }}>
      <NavigationBar />
      <Box sx={{ flexDirection: "column", gap: "10px" }}>
        <Typography variant="h4" color="primary">
          Efficiently manage your warehouse inventory with ease
        </Typography>
        <br />
        <TextField
          id="standard-basic"
          label="Name"
          variant="outlined"
          placeholder="Enter name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />
        <br />
        <TextField
          id="standard-basic"
          label="Type"
          variant="outlined"
          placeholder="Enter type..."
          onChange={(event) => {
            setType(event.target.value);
          }}
        />
        <br />
        <br />
        <TextField
          id="standard-basic"
          label="Place"
          variant="outlined"
          placeholder="Enter place..."
          onChange={(event) => {
            setPlace(event.target.value);
          }}
        />
        <br />
        <br />
        <TextField
          id="standard-basic"
          label="Production Date"
          variant="outlined"
          type="number"
          placeholder="Enter production date..."
          onChange={(event) => {
            setProductionDate(event.target.value);
          }}
        />
        <br />
        <br />
        <TextField
          id="standard-basic"
          label="Quantity"
          variant="outlined"
          type="number"
          onChange={(event) => {
            setQuantity(event.target.value);
          }}
        />
        <br />
        <br />
        <Button variant="outlined" onClick={createProduct}>
          Create product
        </Button>
      </Box>
    </div>
  );
}

export default Main;
