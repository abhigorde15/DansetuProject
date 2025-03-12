import { Button } from '@mui/material';
import  { useState } from 'react';
import DialogProducts from './DialogProducts';

const ListProduct = ({onProductAdded}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-lg max-w-md mx-auto border border-blue-200 text-center">
    <h2 className="text-xl font-semibold mb-4">List Your Products</h2>
    <Button
      variant="contained"
      onClick={() => setOpen(true)}
      sx={{
        backgroundColor: "#3B82F6",
        color: "white",
        paddingX: "1rem",
        paddingY: "0.5rem",
        borderRadius: "0.5rem",
        transition: "background-color 0.3s ease-in-out",
        marginTop: "1rem",
        "&:hover": { backgroundColor: "#2563EB" },
      }}
    >
      Add Product
    </Button>
    <DialogProducts open={open} handleClose={() => setOpen(false)} onProductAdded={onProductAdded} />
    </div>
  );
};

export default ListProduct;