import React from 'react';
import { Container, Typography, Box, Grid, Button, Card, CardContent, CardActions, BottomNavigation, BottomNavigationAction } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Home() {
  const courses = [
    { id: 1, title: 'Course 1', description: 'Description for course 1' },
    { id: 2, title: 'Course 2', description: 'Description for course 2' },
    { id: 3, title: 'Course 3', description: 'Description for course 3' },
    // Add more courses as needed
  ];

  function alerthendle() {
    alert("sorry is not connect more information")
  }

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '2rem',
          textAlign: 'center'
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to LCM Learning Platform
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          A responsive learning experience using Material-UI
        </Typography>

        <Grid container spacing={4} justifyContent="center" marginTop={4} marginBottom={6}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Interactive Courses
                </Typography>
                <Typography variant="body2">
                  Engage with our cutting-edge courses designed for optimal learning and retention.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Explore Courses</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Progress Tracking
                </Typography>
                <Typography variant="body2">
                  Monitor your learning journey with detailed progress reports and analytics.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Demo</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Community Support
                </Typography>
                <Typography variant="body2">
                  Connect with peers and mentors in our vibrant learning community.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Join Community</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="contained" color="primary" size="large">
              Get Started
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="secondary" size="large">
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: '100%',
          // position: 'fixed',
          marginTop: '10px',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <BottomNavigation showLabels >
          <BottomNavigationAction onClick={() => alerthendle()} label="Facebook" icon={<FacebookIcon sx={{ color: "blue" }} />} />
          <BottomNavigationAction onClick={() => alerthendle()} label="Twitter" icon={<TwitterIcon sx={{ color: "#00a2ff" }} />} />
          <BottomNavigationAction onClick={() => alerthendle()} label="Instagram" icon={<InstagramIcon sx={{ color: "#ef0978" }} />} />
          <BottomNavigationAction onClick={() => alerthendle()} label="WhatsApp" icon={<WhatsAppIcon sx={{ color: "#0dfb8c" }} />} />
        </BottomNavigation>
      </Box>
    </Container>
  );
}
