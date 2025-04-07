import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userList, setUserList] = useState([]);

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const addUser = () => {
    const newUser = {
      id: Date.now,
      name: name,
      email: email,
    };
    setUserList([...userList, newUser]);
    setName("");
    setEmail("");
    console.log("message", name, email);
  };

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
      <Box style={{ padding: 100 }}>
        <Typography variant="h5" gutterBottom>
          Insert your data
        </Typography>
        <TextField
          label="name"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={onNameChange}
          value={name}
        />
        <TextField
          label="email"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={onEmailChange}
          value={email}
        />
        <TextField
          label="password"
          variant="standard"
          fullWidth
          margin="normal"
          onChange={onPasswordChange}
          value={password}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addUser}
          disabled={!name || !email}
        >
          Submit
        </Button>
      </Box>
      <Box>
        <Typography variant="h3">Users List</Typography>
        {userList &&
          userList.map((user) => (
            <Paper
              elevation={3}
              style={{ padding: 16, margin: 16 }}
              key={user.id}
            >
              <Typography variant="h6" gutterBottom>
                Inserted data:
              </Typography>
              <Typography variant="body1">
                <strong>{user.name}</strong>
              </Typography>
              <Typography variant="body2">
                <strong>{user.email}</strong>
              </Typography>
            </Paper>
          ))}
      </Box>
    </div>
  );
};

export default UserForm;
