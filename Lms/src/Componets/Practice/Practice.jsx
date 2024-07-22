
import {  Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../../Assets/pankaj.jpg'
import blob from "../../Assets/blob.svg"
export default function Practice() {

  return (
    <div >
     
      <Card sx={{position:"relative", width:"80%",textAlign:"center",ml:"10%",mt:"20px",padding:"4rem",backgroundColor:"",wordSpacing:"10px",boxShadow:"0px 5px 2px black"}} >
        <CardContent>
          <Typography variant="h3">
            Welcome to the Practice Page
          </Typography>
          <Typography variant="p">
            This page contains two componets:Quize and Question Choose one from the navigation bar above to begin your practice session
          </Typography><br/>
          <Typography variant='p'>
               Enhance your learing with our interactive tools designed to test and improve your knowledge.
          </Typography>
        </CardContent>

       <div style={{display:"flex",alignItems:'center',marginLeft:"40%",gap:"10px",marginTop:"20px"}}>
        <Link to="/Practice/Quize" style={{ textDecoration: 'none',backgroundColor:"rgb(50, 50, 213)",color:"white",padding:'0.4rem',borderRadius:"5px",marginTop:"-15px"}} variant='contained'className='practicelink'>Quize</Link>
        <Link to="/Practice/Question" style={{ textDecoration: 'none',backgroundColor:"rgb(50, 50, 213)",color:"white",padding:'0.4rem',borderRadius:"5px",marginTop:"-15px" }} variant='contained'>Question</Link>
       </div>
      </Card>
      <CardMedia component="img" src={blob} sx={{position:'absolute',top:"-60%",zIndex:"-1",ml:'-190px'}}/>
     
    </div>
  )
}
