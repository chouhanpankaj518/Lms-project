// import React from 'react'
// import { useLocation } from 'react-router-dom'
// export default function CardDetails() {
//   let location=useLocation()
//   let {Course} =location.state
//   console.log(Course)
//   return (
//     <div>
//      <div>
//       <h1>{Course.Topic}</h1>
//       <p>Week1: {Course.Week1}</p>
//       <p>Week2: {Course.Week2}</p>
//       <p>Week3: {Course.Week3}</p>
//       <p>Week4: {Course.Week4}</p>
//       <p>Week5: {Course.Week5}</p>
//       <p>Week6: {Course.Week6}</p>
//       <p>Week7: {Course.Week7}</p>
//       <p>Week8: {Course.Week8}</p>
//       <p>Week9: {Course.Week9}</p>
//       <p>Week10: {Course.Week10}</p>
//       <p>Week11: {Course.Week11}</p>
//       <button onClick={()=>window.history.back()}>back</button>
//      </div>
//     </div>
//   )
// }



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