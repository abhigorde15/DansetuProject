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
  "& .MuiDialog-paper": {
    minWidth: "600px",
    maxWidth: "90vw",
    padding: theme.spacing(3),
  },
}));

export default function CustomizedDialogs({ open, handleClose, product,onUpdate }) {
  const [productVal, setProductVal] = React.useState({
    pName: "",
    price: "",
    discount: "",
    stockQuantity: "",
    category: "",
  
  });

  // ✅ selected product set in state when dialog opens
  React.useEffect(() => {
    
    if (product) {
      setProductVal({
        id: product.id || "",
        pName: product.pName || "",
        price: product.price || "",
        discount: product.discount || "",
        stockQuantity: product.stockQuantity || "",
        category: product.category || "",
      
      });
    }
  }, [product]);

  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setProductVal((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleFileChange = (e) => {
  //   setProductVal((prev) => ({
  //     ...prev,
  //     pImage: e.target.files[0],
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  
    // if (productVal.pImage) {
    //     formData.append("pImage", productVal.pImage);
    // }

   
    try {
      
      const response = await axios.put(
        `http://localhost:8080/api/product/update/${productVal.id}`,
        productVal,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json", 
          },
        }
      );

      onUpdate(response.data);
      handleClose();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <React.Fragment>
      <BootstrapDialog onClose={handleClose} open={open}>
        <DialogTitle sx={{ m: 0, p: 2 }}>Update Your Product</DialogTitle>
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
              value={productVal.pName}
              onChange={handleChange}
              required
            />
            <TextField
              label="Price"
              name="price"
              fullWidth
              value={productVal.price}
              onChange={handleChange}
              required
            />
            <TextField
              label="Discount"
              name="discount"
              type="Number"
              fullWidth
              value={productVal.discount}
              onChange={handleChange}
              required
            />
            <TextField
              label="Stock Quantity"
              name="stockQuantity"
              type="Number"
              fullWidth
              value={productVal.stockQuantity}
              onChange={handleChange}
              required
            />
            <Select
              name="category"
              value={productVal.category}
              onChange={handleChange}
              fullWidth
              required
            >
              <MenuItem value="Food">Food</MenuItem>
              <MenuItem value="Medical">Medical</MenuItem>
              <MenuItem value="Clothes">Clothes</MenuItem>
            </Select>

            
            {/* <input type="file" accept="image/*" onChange={handleFileChange} /> */}

            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              sx={{ mt: 2 }}
            >
              Update Product
            </Button>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
