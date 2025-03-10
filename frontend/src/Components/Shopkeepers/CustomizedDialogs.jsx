import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { TextField, Box, MenuItem, Select, InputLabel, FilledInput } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%", // Ensures content takes full width
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
    justifyContent: "center",
  },
  "& .MuiDialog-paper": {
    minWidth: "800px", // Dialog width
    maxWidth: "90vw",
    padding: theme.spacing(3),
  },
}));

export default function CustomizedDialogs({ open, handleClose }) {
  const [shopData, setShopData] = React.useState({
    shopName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    openingHours: "",
    categories: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setShopData({ ...shopData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Shop Data Submitted:", shopData);
  };

  return (
    <React.Fragment>
      <BootstrapDialog onClose={handleClose} open={open}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          List Your Shop
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: "100%", // Takes full width of the dialog
              maxWidth: "600px", // Prevents excessive stretching
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: 2,
            }}
          >
            {/* Shop Name */}
            <TextField
              label="Shop Name"
              name="shopName"
              fullWidth
              value={shopData.shopName}
              onChange={handleChange}
              required
            />      

            {/* Phone Number */}
            <TextField
              label="Phone Number"
              type="tel"
              name="phone"
              fullWidth
              value={shopData.phone}
              onChange={handleChange}
              required
            />
            {/* Address */}
            <TextField
              label="Address"
              name="address"
              fullWidth
              multiline
              rows={2}
              value={shopData.address}
              onChange={handleChange}
              required
            />
            {/* Opening Hours */}
            <TextField
              label="Opening Hours (e.g., 9 AM - 9 PM)"
              name="openingHours"
              fullWidth
              value={shopData.openingHours}
              onChange={handleChange}
              required
            />
            <Select
             label="Categories"
             name="categories"
             value={shopData.categories}
             onChange={handleChange}
          > 
         
            <MenuItem  value="Food">Food</MenuItem>
            <MenuItem value="Medical">Medical</MenuItem>
            <MenuItem value="Clothes">Clothes</MenuItem>
           </Select>

            {/* Shop Image */}
            <input
            type="file"
            accept="image/*"
            className="border p-2 rounded"
            onChange={(e) => setShopData({ ...shopData, image: e.target.files[0] })}
            />

            {/* Description */}
            <TextField
              label="Short Description"
              name="description"
              fullWidth
              multiline
              rows={3}
              value={shopData.description}
              onChange={handleChange}
            />

            {/* Submit Button */}
            <Button
              onClick={handleClose}
              type="submit"
              variant="contained"
              color="success"
              sx={{ mt: 2 }}
            >
              Submit Shop Listing
            </Button>
          </Box>
        </DialogContent>
      
      </BootstrapDialog>
    </React.Fragment>
  );
}
