import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  CardMedia
} from '@mui/material';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login attempt with:', { email, password });
  };
  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: "50px" }}>
      <Box sx={{ marginTop: 1 }}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, maxwidth: '300px', minWidthL: "200px", top: "50px", position: "relative", height: '400px' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
        <CardMedia component="img" src="https://r2.erweima.ai/imgcompressed/img/compressed_b1cef9c3f38c5508bd9762c39256af4f.webp" sx={{ position: "absolute", top: '130px', height: "400px", zIndex: -1, width: '400px' }} />
      </Box>
    </Container>
  );
}

export default LoginPage;