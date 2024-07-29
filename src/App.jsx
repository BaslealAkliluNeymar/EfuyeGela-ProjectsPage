import { useState } from 'react'
import './App.css'
import { AppBar, Container, Typography,Grid,Box } from '@mui/material'
import CardComponent from './Components/CardComponent.jsx'
import Footer from './Components/Footer.jsx'
function App() {

  return (
    <>
      <div className='container'>
        <Container position='fixed' sx={{ paddingBottom:'20px'}}>
          <AppBar sx={{
            backgroundColor:'transparent',
            display:'flex', 
            alignItems:'center', 
            justifyContent:'space-between',
            boxShadow:'none',
            position:'relative',
            height:'150px'
          }}>
            <Container 
              sx={{
                display:'flex', 
                alignItems:'center', 
                justifyContent:'space-around', 
                gap:'10px',
                padding:'20px',
                }} >
                <Box sx={{width:'85px', height:'64px',flex:3, display:'flex', alignItems:'center'}}>
                  <img src='src\assets\Group.png' style={{width:'52px', height:'43px' }} />
                </Box>
                <Grid container sx={{
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'space-between',
                  flex:2
                }}>
                  <Grid item fontFamily='montserrat' color="black" fontSize='16px'>
                    <Typography sx={{
                      fontSize:'15px',
                      lineHeight:'18.29px',
                      fontWeight:'400'
                    }}>Health Care</Typography>
                  </Grid>
                  <Grid item fontFamily='montserrat'  color="black" fontSize='16px'>
                    <Typography sx={{
                      fontSize:'15px',
                      lineHeight:'18.29px',
                      fontWeight:'400'
                    }}>Agriculture</Typography>
                  </Grid>
                  <Grid item fontFamily='montserrat' color="black" fontSize='16px'>
                    <Typography sx={{
                      fontSize:'15px',
                      lineHeight:'18.29px',
                      fontWeight:'400'
                    }}>Game</Typography>
                  </Grid>
                  <Grid item fontFamily='montserrat'  color="black" fontSize='16px'>
                    <Typography sx={{
                      fontSize:'15px',
                      lineHeight:'18.29px',
                      fontWeight:'400'
                    }}>Culture</Typography>
                  </Grid>
                  <Grid item fontFamily='montserrat'  color="black" fontSize='16px'>
                    <Typography sx={{
                      fontSize:'15px',
                      lineHeight:'18.29px',
                      fontWeight:'400'
                    }}>Education</Typography>
                  </Grid>
                </Grid>
            </Container>
          </AppBar>
          <Container sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
          }}
          xs={12}
          >
            <CardComponent  />
            <CardComponent  />
            <CardComponent  />
          </Container>
        </Container>
        <Footer />
      </div>

    
    </>
  )
}

export default App
