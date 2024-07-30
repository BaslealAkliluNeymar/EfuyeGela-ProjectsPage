import { Container, Grid, Typography,Box } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import React from 'react'

const Footer = () => {
  return (
    <div className='footer_container'>
        <Container sx={{
            height:'332px',
            display:'flex',
            alignItems:'flex-start',
            paddingTop:'70px'
        }}>
            <Grid container sx={{
                display:'flex',
                flex:1,
                justifyContent:"center",
                alignContent:'center',
                flexDirection:'column',
                gap:'8px',
                padding:'15px',
                width:'350px'
            }}>
                <Grid item>
                    <Typography sx={{
                        fontFamily:'Itim',
                        fontWeight:'400',
                        fontSize:'40.19px',
                        lineHeight:'48.23px',
                        color:'rgba(251, 136, 21, 1)'
                    }}>EFUYEGELA</Typography>
                </Grid>

                <Grid item>
                    <Typography sx={{
                      color: 'rgba(245, 247, 250, 1)',
                      fontFamily:'Inter',
                      fontWeight:'400',
                      fontSize:'14px',
                      lineHeight:'20px'
                    }}>Copyright © 2024 EFUYEGELA Inc.</Typography>
                </Grid>
                <Grid item>
                    <Typography sx={{
                      color:'rgba(245, 247, 250, 1)',
                      fontFamily:'Inter',
                      fontWeight:'400',
                      fontSize:'14px',
                      lineHeight:'20px'
                    }}>All rights Reserved</Typography>
                </Grid>



                <Grid container sx={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'flex-start',
                        gap:'10px'
                        }}>
                    <Grid item>
                        <InstagramIcon sx={{color:"white"}}/>
                    </Grid>
                    <Grid item>
                        <SportsBasketballIcon sx={{color:"white"}}/>
                    </Grid>
                    <Grid item>
                        <TwitterIcon sx={{color:"white"}}/>
                    </Grid>
                    <Grid item>
                        <YouTubeIcon sx={{color:"white"}}/>
                    </Grid>
                </Grid>
            </Grid>

            <Container container sx={{
                flex:3,
                display:'flex',
                alignItems:'flex-start',
                width:'825.25px'
            }}>
                <Box sx={{
                    flex:1,
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-between',
                    gap:'10px',
                    color:'white'
                }}>
                    <Typography variant='h3' sx={{
                        fontSize:'26px',
                        lineHeight:'36.4px',
                        fontFamily:'Inter',
                        fontWeight:'600'
                    }}>Company</Typography>
                    <Typography variant='h8'>About us</Typography>
                    <Typography variant='h8'>Blog</Typography>
                    <Typography variant='h8'>Contact us</Typography>
                    <Typography variant='h8'>Testimonials</Typography>
                </Box>


                <Box sx={{
                    flex:1,
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-between',
                    gap:'10px',
                    color:'white'
                }}>
                    <Typography variant='h3' sx={{
                        fontSize:'26px',
                        lineHeight:'36.4px',
                        fontFamily:'Inter',
                        fontWeight:'600'
                    }}>Support</Typography>
                    <Typography variant='h8'>Help Center</Typography>
                    <Typography variant='h8'>Terms of Service</Typography>
                    <Typography variant='h8'>Legal</Typography>
                    <Typography variant='h8'>Privary policy</Typography>
                </Box>


                <Box sx={{
                    flex:1,
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'flex-start',
                    // border:'1px solid red',
                    gap:'10px',
                    color:'white'
                }}>
                    <Typography variant='h3' sx={{
                        fontSize:'26px',
                        lineHeight:'36.4px',
                        fontFamily:'Inter',
                        fontWeight:'600'
                    }}>Stay up to date</Typography>

                    <Box sx={{
                        position:'relative'
                    }}>

                        <input placeholder='Your email address' type='email' style={{
                            background:'rgba(217, 219, 225, 0.5)',
                            width:'331.52px',
                            height:'52px',
                            padding:'15px',
                            borderRadius:'10.4px',
                            // opacity:1,
                            color:'white',
                            fontSize:'18.2px'
                        }}/>

                        <img src='src\assets\send.png' style={{
                            position:'absolute',
                            left:'290px',
                            top:'15px'
                        }}/>
                    </Box>
                </Box>
            </Container>
        </Container>
    </div>
  )
}

export default Footer