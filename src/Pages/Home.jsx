import React from 'react'
import ImageComponent from '../Components/ImageComponent'
import { Container, Typography, Box, ImageList, ImageListItem } from '@mui/material'
import problem from '../assets/problem.jpeg'
import solution from '../assets/solution.jpeg'
import impact from '../assets/impact.jpeg'
const Home = () => {
  return (
    <Container sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexWrap:'wrap',
        gap:'25px',
    }}>
        {/* */}

      <Box
        sx={{
          display:'flex'
        }}>

        <Box sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'space-between',
          gap:'20px',
          flex:2
        }}>
          <Typography variant='h2' fontSize='46.08px'>
            3D Digital Watershed Simulator 
          </Typography>


          <Typography variant='h4'>
            October 2020-December 2021
          </Typography>

          <Typography>
            The objective was to develop a blended learning three dimensional digital watershed simulator 
            to increase Developement Agents learning experience 
          </Typography>

        </Box>


        <Box sx={{
          flex:1
        }}>
          <Typography>
            Project Images
          </Typography>

          <ImageList width='480px' height='150.5px'>
            <ImageListItem>
            <img
                srcSet='src\assets\solution.jpeg'
                src='src\assets\solution.jpeg'
                alt='problem'
                loading="lazy"
                width='228.9px'
                height='150.5px'
              />
            </ImageListItem>

            <ImageListItem>
            <img
                srcSet='src\assets\solution.jpeg'
                src='src\assets\solution.jpeg'
                alt='solution'
                loading="lazy"
                width='228.9px'
                height='150.5px'

              />
            </ImageListItem>
          </ImageList>
        </Box>
      </Box>

        <ImageComponent img={problem}  text="Problem" />
        <ImageComponent img={solution} text="Solution"/>
        <ImageComponent img={impact} text="Impact"/>
      
    </Container>
  )
}

export default Home