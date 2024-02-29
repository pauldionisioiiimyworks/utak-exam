import React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, query, where, onSnapshot, addDoc, updateDoc } from "firebase/firestore";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrwEG5URyH75MIk-FppV_Ypn0kp_gLXYQ",
  authDomain: "utak-exam.firebaseapp.com",
  projectId: "utak-exam",
  storageBucket: "utak-exam.appspot.com",
  messagingSenderId: "588717404562",
  appId: "1:588717404562:web:266a85c9b14a64f6d2514b",
  measurementId: "G-TLZ6N0XBM3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function AddMenuComponent() {

  const [keyword, setKeyword] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [name, setName] =  React.useState("");
  const [options, setOptions] =  React.useState("");
  const [price, setPrice] =  React.useState("");
  const [cost, setCost] =  React.useState("");
  const [stock, setStock] =  React.useState("");

  const handleSetKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleOptionsChange = (event) => {
    setOptions(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCostChange = (event) => {
    setCost(event.target.value);
  };

  const handleStockChange = (event) => {
    setStock(event.target.value);
  };

  const handleResetChange = (event) => {
    setCategory("");
    setName("");
    setOptions("");
    setPrice("");
    setCost("");
    setStock("");
  };

  function saveMenu() {

    try {
      const docRef = addDoc(collection(db, "menu"), {
        category: category,
        name: name,
        options: options,
        price: price,
        cost: cost,
        stock: stock
      });
      console.log("Document written");
      alert("Successfully added new menu!");

    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  function searchMenu() {
    
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const q = query(collection(db, "menu"), where("name", "==", keyword));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setCategory(doc.data().category);
        setName(doc.data().name);
        setOptions(doc.data().options);
        setPrice(doc.data().price);
        setCost(doc.data().cost);
        setStock(doc.data().stock);
      });
    });
  }

  return (
    <>
        <Grid container spacing={3}>
        <Grid item xs={8}>
          <TextField className="outlined-basic" label="Search Menu" variant="outlined" value={keyword} 
          onChange={handleSetKeywordChange}
          style={{maxWidth: '400px', maxHeight: '40px', minWidth: '400px', minHeight: '40px', margin:'10px'}}/>
        </Grid>
        <Grid item xs={8}>
          <Button variant="contained" onClick={searchMenu}
            style={{maxWidth: '190px', maxHeight: '40px', minWidth: '400px', minHeight: '40px', margin:'10px'}}>
            Search</Button>
        </Grid>
        <Grid item xs={8}>
          <TextField className="outlined-basic" label="Category" variant="outlined" value={category} 
          onChange={handleCategoryChange}
          style={{maxWidth: '400px', maxHeight: '40px', minWidth: '400px', minHeight: '40px', margin:'10px'}}/>
        </Grid>
        <Grid item xs={8}>
          <TextField id="outlined-basic" label="Name" variant="outlined" value={name} 
          onChange={handleNameChange}
          style={{maxWidth: '400px', maxHeight: '40px', minWidth: '400px', minHeight: '40px', margin:'10px'}}/>
        </Grid>
        <Grid item xs={8}>
          <TextField id="outlined-basic" label="Options" variant="outlined" value={options} 
          onChange={handleOptionsChange}
          style={{maxWidth: '400px', maxHeight: '40px', minWidth: '400px', minHeight: '40px', margin:'10px'}}/>
        </Grid>
        <Grid item xs={8}>
          <TextField id="outlined-basic" label="Price" variant="outlined" value={price} 
          onChange={handlePriceChange}
          style={{maxWidth: '400px', maxHeight: '40px', minWidth: '400px', minHeight: '40px', margin:'10px'}}/>
        </Grid>
        <Grid item xs={8}>
          <TextField id="outlined-basic" label="Cost" variant="outlined" value={cost} 
          onChange={handleCostChange}
          style={{maxWidth: '400px', maxHeight: '40px', minWidth: '400px', minHeight: '40px', margin:'10px'}}/>
        </Grid>
        <Grid item xs={8}>
          <TextField id="outlined-basic" label="Stock" variant="outlined" value={stock} 
          onChange={handleStockChange}
          style={{maxWidth: '400px', maxHeight: '40px', minWidth: '400px', minHeight: '40px', margin:'10px'}}/>
        </Grid>
        <Grid item xs={8}>
          <Button variant="contained" onClick={saveMenu}
          style={{maxWidth: '190px', maxHeight: '40px', minWidth: '190px', minHeight: '40px', margin:'10px'}}
          >Save</Button>
        <Button variant="contained" onClick={handleResetChange}
          style={{maxWidth: '190px', maxHeight: '40px', minWidth: '190px', minHeight: '40px', margin:'10px'}}>
          Reset</Button>
      </Grid>
    </Grid>
    </>
  );
}

export default AddMenuComponent;