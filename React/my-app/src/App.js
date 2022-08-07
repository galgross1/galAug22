import React from 'react';
// import Button from '../components/Button';
import {Button, styled, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const BlueButton = styled(button)({
    backgroundColor:"skyblue",
    color:"#888",
    margin:5,
})

function App() {
  return (
    <>
  {/* <Button/> */}
  <div>
  <Button variant="contained"  size="small" disableElevation>
    Disable elevation
  </Button>
  <Button variant="outlined" startIcon={<DeleteIcon />} size="medium"> 
        Delete
      </Button>
      <Typography variant="h1" component="h2">
        h1 Heading but its h2 component
      </Typography>
      <button variant="contained" sx={{
        backgroundColor:"skyblue",
        color:"#888",
        margin:5,
      }}>My Uniqe Button</button>

      <BlueButton>My Uniqe Button Const</BlueButton>
  </div>
    </>
  );
}

export default App;
