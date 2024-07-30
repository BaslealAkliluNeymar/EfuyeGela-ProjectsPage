import React from 'react'
import { Container, AppBar,Box,Grid, Typography, } from '@mui/material'
import { Outlet, Link } from "react-router-dom";
const NavBar = () => {
  return (
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
                    <Link to='/'>
                      <img src='src\assets\Group.png' style={{width:'52px', height:'43px' }} />
                    </Link>
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
                        }}>
                        <Link to="/health" style={{
                          textDecoration:'none'
                        }}>Health Care</Link>
                        </Typography>
                    
                    
                  </Grid>
                  <Grid item fontFamily='montserrat'  color="black" fontSize='16px'>
                    <Typography sx={{
                      fontSize:'15px',
                      lineHeight:'18.29px',
                      fontWeight:'400'
                    }}>
                      <Link to="/agriculture" style={{
                          textDecoration:'none'
                        }}>Agriculture</Link>
                      </Typography>
                  </Grid>
                  <Grid item fontFamily='montserrat' color="black" fontSize='16px'>
                    <Typography sx={{
                      fontSize:'15px',
                      lineHeight:'18.29px',
                      fontWeight:'400'
                    }}>
                      <Link to="/game" style={{
                          textDecoration:'none'
                        }}>Game</Link>
                      </Typography>
                  </Grid>
                  <Grid item fontFamily='montserrat'  color="black" fontSize='16px'>
                    <Typography sx={{
                      fontSize:'15px',
                      lineHeight:'18.29px',
                      fontWeight:'400'
                    }}>
                      <Link to="/culture" style={{
                          textDecoration:'none'
                        }}>Culture</Link>
                    </Typography>
                  </Grid>
                  <Grid item fontFamily='montserrat'  color="black" fontSize='16px'>
                    <Typography sx={{
                      fontSize:'15px',
                      lineHeight:'18.29px',
                      fontWeight:'400'
                    }}>
                     <Link to="/education" style={{
                          textDecoration:'none'
                        }}>Education</Link>
                      </Typography>
                  </Grid>
                </Grid>
            </Container>
          </AppBar>
        </Container>
  )
}

export default NavBar