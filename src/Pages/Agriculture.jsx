import React from 'react'
import { Container, Typography,Box } from '@mui/material'
import CardComponent from '../Components/CardComponent'
const Agriculture = () => {
  return (
    
    <Container sx={{
        display:'flex',
        alignItems:'center',
        flexWrap:'wrap',
        gap:'20px'
    }}>
        <Box sx={{
          width:'100%',
          backgroundColor:'white',
          border:'3px solid rgba(245, 207, 101, 1)',
          padding:'5px',
          borderRadius:'10px'
        }}>
          <Typography sx={{
            fontSize:'18px'
          }}>Agriculture</Typography>
        </Box>
        <Box sx={{
          display:'flex',
          alignItems:'center',
          flexWrap:'wrap',
          gap:'20px'
        }}>
          <CardComponent  />
          <CardComponent  />
          <CardComponent  />

        </Box>
        
    </Container>
   
  )
}

export default Agriculture