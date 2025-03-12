import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { TextField, Box, MenuItem, Select } from "@mui/material";
import axios from "axios";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
    justifyContent: "center",
  },
  "& .MuiDialog-paper": {
    minWidth: "600px",
    maxWidth: "90vw",
    padding: theme.spacing(3),
  },
}));

export default function DialogProducts({ open, handleClose }) {
  const [shopData, setShopData] = React.useState({
    pName: "",
    price: "",
    discount: "",
    stockQuantity: "",
    category: "",
    pImage: null, 
   
  });

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  console.log(id);
  const handleChange = (e) => {
    setShopData({ ...shopData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    
    setShopData({ ...shopData, pImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("pImage", shopData.pImage); 
    formData.append("pName", shopData.pName);
    formData.append("price", shopData.price);
    formData.append("discount", shopData.discount);
    formData.append("stockQuantity", shopData.stockQuantity);
    formData.append("category", shopData.category);
    formData.append("token", token); 

    try {
      const response = await axios.post(
        "http://localhost:8080/api/product/add",
        formData,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

     
      handleClose();
    } catch (error) {
      console.error("Error submitting shop data:", error);
    }
  };

  return (
    <React.Fragment>
      <BootstrapDialog onClose={handleClose} open={open}>
        <DialogTitle sx={{ m: 0, p: 2 }}>List Your Product</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              label="Product Name"
              name="pName"
              fullWidth
              value={shopData.pName}
              onChange={handleChange}
              required
            />
            <TextField
              label="Price"
              name="price"
              fullWidth
              value={shopData.price}
              onChange={handleChange}
              required
            />
            <TextField
              label="Discount"
              name="discount"
              type="Number"
              fullWidth
              value={shopData.discount}
              onChange={handleChange}
              required
            />
            <TextField
              label="Stock Quantity"
              name="stockQuantity"
              type="Number"
              fullWidth
              value={shopData.stockQuantity}
              onChange={handleChange}
              required
            />          
            <Select
              name="category"
              value={shopData.category}
              onChange={handleChange}
              fullWidth
              required
            >
              <MenuItem value="Food">Food</MenuItem>
              <MenuItem value="Medical">Medical</MenuItem>
              <MenuItem value="Clothes">Clothes</MenuItem>
            </Select>
           
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ width: "100%" }}
            />
          
            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
