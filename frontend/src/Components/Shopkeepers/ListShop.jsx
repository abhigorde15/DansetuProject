import { Button } from '@mui/material';
import React, { useState } from 'react'
import CustomizedDialogs from './CustomizedDialogs';

const ListShop = () => {
   const [open, setOpen] = useState(false);
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-lg max-w-md mx-auto border border-blue-200 text-center">
      <h2 className="text-xl font-semibold mb-4">Why are You Waiting For?</h2>
      
        <Button
        variant="contained"
        onClick={() => {
          setOpen(true)}}
        sx={{
          backgroundColor: "#3B82F6", // bg-blue-500
          color: "white", // text-white
          paddingX: "1rem", // px-4
          paddingY: "0.5rem", // py-2
          borderRadius: "0.5rem", // rounded-lg
          transition: "background-color 0.3s ease-in-out", // transition effect
          marginTop: "1rem", // mt-4
          "&:hover": {
            backgroundColor: "#2563EB", // hover:bg-blue-600
          },
        }}
      >
                Proceed to Donate
            </Button >
                 
                  <CustomizedDialogs  open={open} handleClose={() => setOpen(false)} />
    </div>
  )
}

export default ListShop;
