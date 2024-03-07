import React from 'react'
import Header from '../Components/shared/Header.jsx'
import { Box, Container, CssBaseline } from '@mui/material'
import Carousel from '../Components/duydev/Home/Carousel.jsx'
import NgotVaThuong from '../Components/duydev/Home/NgotVaThuong.jsx'
import Events from '../Components/duydev/Home/Events.jsx'
import Discount from '../Components/duydev/Home/Discount.jsx'
import Logo from '../Components/duydev/Home/Logo.jsx'
import Services from '../Components/duydev/Home/Services.jsx'


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
