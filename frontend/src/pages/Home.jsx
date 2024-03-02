import React from 'react'
import Header from '../Components/shared/Header'
import { Box, Container, CssBaseline } from '@mui/material'
import Carousel from '../Components/duydev/Home/Carousel'
import NgotVaThuong from '../Components/duydev/Home/NgotVaThuong'
import Events from '../Components/duydev/Home/Events'
import Discount from '../Components/duydev/Home/Discount'
import Logo from '../Components/duydev/Home/Logo'
import Services from '../Components/duydev/Home/Services'


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