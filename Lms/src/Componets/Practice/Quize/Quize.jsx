import React from 'react'
import Practice from '../Practice'
import "./Quize.css"
import { Link } from 'react-router-dom'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'


export default function Quize() {

  return (
    <div>
      <Practice />

      <div className='card'>
        <Link to={"/Practice/Quize/JavaScript"} style={{ textDecoration: 'none' }}>
          <Card sx={{ width: "200px", height: '250px' }}>
            <CardActionArea>

              <CardMedia sx={{ width: "200px", height: "180px" }} component="img" src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' />
              <CardContent>
                <Typography variant='h4' sx={{ textDecoration: "none" }}>
                  javascript
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>

        <Link to={"/Practice/Quize/Htmlcss"} style={{ textDecoration: 'none' }}>
          <Card sx={{ width: "200px", height: '250px' }}>
            <CardActionArea>

              <CardMedia sx={{ width: "200px", height: "180px" }} component="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG2xeTfbNovL_vyMPnpuRYLrDSD0mBfNKXTXx2vcIAbQKhrLrzDJi2VbiFgcqXxf_lZAw&usqp=CAU" />
              <CardContent>
                <Typography variant='h4' sx={{ textDecoration: "none" }}>
                  Html css
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>

        <Link to={"/Practice/Quize/Reactjs"} style={{ textDecoration: 'none' }}>
          <Card sx={{ width: "200px", height: '250px' }}>
            <CardActionArea>

              <CardMedia sx={{ width: "200px", height: "180px" }} component="img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s' />
              <CardContent>
                <Typography variant='h4' sx={{ textDecoration: "none" }}>
                  React js
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>

      </div>
    </div>
  )
}
