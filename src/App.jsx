import { useState } from 'react'
import './App.css'
import { AppBar, Container, Typography,Grid,Box } from '@mui/material'
import CardComponent from './Components/CardComponent.jsx'
import Footer from './Components/Footer.jsx'
import NavBar from './Components/NavBar.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Agriculture  from './Pages/Agriculture.jsx'
import Home from './Pages/Home.jsx'
function App() {

  return (
      <Box sx={{
        backgroundImage: 'linear-gradient(white, #F7D372)',
        width:'100%',
        minHeight:'100vh',
        display:'flex',
        flexDirection:'column'
      }}>
        <Router>
          <NavBar />
          <Container sx={{
            paddingBottom:'20px'
          }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path ='/agriculture' element={<Agriculture />} />
            </Routes>
          </Container>
          <Footer />
        </Router>
      </Box>

  
  )
}

export default App
