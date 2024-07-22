import React from 'react'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Course({ data }) {




  return (
    <div>
      <Card sx={{ display: "flex", flexWrap: "wrap" }}>
        {
          data.map((e, i) => (

            <Link to={"CardDetails"} style={{ textDecoration: 'none' }} state={{ Course: e }}>
              <Card key={i} sx={{ height: "280px", width: "250px", ml: 12, mt: 4, mb: 4 }}>
                <CardActionArea >
                  {/* <CardMedia component="img" sx={{height:"150px",width:"2n50px",position:"center",background:"red"}} src={e.image}/> */}
                  <img style={{ backgroundPosition: "cover", width: '100%', height: "180px" }} src={e.image} />
                  <CardContent >
                    <Typography variant='h6' sx={{ textAlign: "center" }}>
                      {e.Course}
                    </Typography>
                    <Typography variant='p' sx={{ textAlign: "center" }}>
                      {e.detail}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          ))
        }
      </Card>
    </div>
  )
}
