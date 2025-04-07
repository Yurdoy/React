import { AppBar, Button, TextField, Toolbar, Typography } from "@mui/material";
import React from "react";

const SimpleInterface = () => {
  return (
    <div>
      <div>
        {/* Panel */}
        <AppBar>
          <Toolbar>
            <Typography variant="h6">simple application</Typography>
          </Toolbar>
        </AppBar>
      </div>

      {/* Main content */}
      <div style={{ padding: 100 }}>
        <Typography variant="h5" gutterBottom>
          Insert your data
        </Typography>
        <TextField label="name" variant="outlined" fullWidth margin="normal" />
        <TextField label="email" variant="outlined" fullWidth margin="normal" />
        <TextField
          label="password"
          variant="standard"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default SimpleInterface;
