import React from 'react'
import Header from '../components/shared/Header.jsx'
import { Box, Container, CssBaseline } from '@mui/material'
import Carousel from '../components/duydev/Home/Carousel.jsx'
import NgotVaThuong from '../components/duydev/Home/NgotVaThuong.jsx'
import Events from '../components/duydev/Home/Events.jsx'
import Discount from '../components/duydev/Home/Discount.jsx'
import Logo from '../components/duydev/Home/Logo.jsx'
import Services from '../components/duydev/Home/Services.jsx'


const Home = () => {
  return (
    <CssBaseline>
      <Container>
        <Box sx={{ backgroundColor: "#FFFFFF", backgroundImage: "linear-gradient(#FFF,#FDEDEF,#FFF)", paddingBottom: '300px' }}>
          <Carousel />
          <NgotVaThuong />
          <Events />
          <Discount />
          <Logo />
          <Services />
        </Box>
      </Container>
    </CssBaseline>
  )
}

export default Home
