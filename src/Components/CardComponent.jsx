import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardComponent = () => {
  return (
    <Card sx={{ 
      maxWidth: 350, 
      position:'relative',
      width:'405px',
      borderRadius:'30px',
      padding:'22px 33px 22px 33px',
      height:'413px',
      boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'
      }} xs={12}>
       
       <Box sx={{
            position:'absolute',
            width:'64px',
            height:'64px',
          }}>
            <img src='src\assets\Design_Convert.png' style={{
              position:'relative',
              top:'1px',
              left:'230px',
              width:'64px',
              height:'64px'
            }} />
          </Box>
      <CardContent sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'flex-start',
        height:'100%',
        // gap:'5px'
      }}>
        
          <Box>
            <img src='src\assets\finger-click.png' style={{
              objectFit:'contain'
            }} />
          </Box>

          
          <Typography variant='h1' fontSize='40px' fontWeight={700} fontFamily='Roboto' lineHeight='48px' >
            Impact
          </Typography>
          <Typography variant='h8' width='275px' fontSize='18px' lineHeight='32px' textAlign='left' color='#6C7994'>
            The Program aims to develop
            a diversified and effective financial sector
            to support the development of the Saudi Arabia's economy.
          </Typography>
        </CardContent>
    </Card>
  )
}

export default CardComponent