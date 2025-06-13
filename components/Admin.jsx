import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Divider
} from '@mui/material';

const Admin = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
        alert('Incorrect password');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 10, p: 4, bgcolor: 'background.paper', boxShadow: 3, borderRadius: 2 }}>
        {!isAuthenticated ? (
          <>
            <Typography variant="h5" align="center" gutterBottom>
              Admin Login
            </Typography>
            <TextField
              fullWidth
              label="Enter Admin Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
            />
            <Button
              fullWidth
              variant="contained"
              onClick={handleLogin}
              sx={{ backgroundColor: '#ff9800', mt: 2, '&:hover': { backgroundColor: '#e68900' } }}
            >
              Enter
            </Button>
          </>
        ) : (
            <>
            <Typography variant="h5" align="center" gutterBottom>
              Welcome, Admin!
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography align="center" color="textSecondary">
              (Your admin dashboard will appear here)
            </Typography>
            {/* Later: Show event registrations here */}
          </>
        )}
      </Box>
    </Container>
  );
};

export default Admin;
