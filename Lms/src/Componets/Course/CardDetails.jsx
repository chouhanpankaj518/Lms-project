import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Typography,
  Box,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
export default function CardDetails() {

  let location = useLocation();
  let { Course } = location.state;
  console.log(Course);

  return (
    <Box >
      <Paper elevation={3}>
        <Box p={3}>
          <Typography variant="h4" >
            {Course.Topic}
          </Typography>
          <List>
            {[...Array(11)].map((_, index) => (
              <ListItem key={index} >
                <ListItemText
                  primary={`Week ${index + 1}`}
                  secondary={Course[`Week${index + 1}`]}
                />
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            color="primary"
            onClick={() => window.history.back()}

          >
            Back
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}