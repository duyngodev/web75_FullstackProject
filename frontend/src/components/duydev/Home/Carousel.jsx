// import { Box, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { IconButton, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
// import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
// import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';


const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const imgUrl = [{
        index: '1',
        url: '	https://sugartown.vn/thumb/1366x700/1/upload/hinhanh/2a-1366x700-01-16457183443.png'
    },
    {
        index: '2',
        url: 'https://sugartown.vn/thumb/1366x700/1/upload/hinhanh/2-1366x700-06-16457183359.png'
    }
    ]

    const carouselStyle = {
        width: '100%',
        height: '500px',
    }

    const sliderStyle = {
        height: '100%',
        position: 'relative'
    }

    const slideStyle = {
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${imgUrl[currentIndex].url})`

    }

    const leftButtonStlye = {
        position: 'absolute',
        top: '50%',
        transform: 'translate( 0 -50%)',
        left: '38px',
        fontSize: '45px',
        color: 'white',
        '&:hover': {
            backgroundColor: '#ccc',
            borderRadius: '50%',
        }
    }
    const rightButtonStlye = {
        position: 'absolute',
        top: '50%',
        transform: 'translate( 0 -50%)',
        right: '38px',
        fontSize: '45px',
        color: 'white',
        '&:hover': {
            backgroundColor: '#ccc',
            borderRadius: '50%',
        }
    }

    function goToLeft() {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? imgUrl.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }


    function goToRight() {
        const isLastSlide = currentIndex === imgUrl.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div style={carouselStyle}>
            <div style={sliderStyle}>
                <IconButton sx={leftButtonStlye} onClick={goToLeft}> <WestIcon /> </IconButton>
                <IconButton sx={rightButtonStlye} onClick={goToRight}> <EastIcon /> </IconButton>
                <div style={slideStyle}></div>
                <div style={{ display: 'flex', justifyContent: ' center' }}>
                    <RadioGroup
                        value={currentIndex + 1}
                        onChange={(e) => setCurrentIndex(e.target.value - 1)}
                        sx={{
                            display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'absolute', bottom: '20px', alignContent: 'center'
                        }}
                    >
                        {
                            imgUrl.map((slide, index) =>
                                <Radio value={slide.index} key={index} icon={<TurnedInNotIcon sx={{ color: 'white' }} />} checkedIcon={<TurnedInIcon sx={{ color: 'white' }} />} />
                            )
                        }
                    </RadioGroup>
                </div>
                <div>

                </div>
            </div>
        </div >
    )
}
export default Carousel

