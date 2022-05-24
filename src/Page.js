import * as React from "react";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

export function Page() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div className="loginpage">
      <div className="whitepage">
        <h1>WELCOME BACK</h1>
        <TextField id="outlined-basic" label="Enter E-Mail ID" variant="outlined" sx={{ width: "600px", margin: "40px" }} />
        <TextField id="outlined-basic" label="Password" variant="outlined" sx={{ width: "600px" }} />
        <div><Checkbox {...label} /> <span>Remember Me</span></div>
        <Button variant="contained" sx={{ width: "580px" }}>Log-In</Button>
        <hr></hr>
        <Button variant="contained" color="error" sx={{ width: "580px", marginTop: '20px' }}>Log-In with Google</Button>
        <Button variant="contained" sx={{ width: "580px", marginTop: '20px', backgroundColor: "blue" }}>Log-In with Facebook</Button>
      </div>
    </div>
  );
}
