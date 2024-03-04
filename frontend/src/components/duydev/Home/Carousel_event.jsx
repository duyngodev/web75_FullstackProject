import { Box, Button, Stack } from '@mui/material'
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Carousel_event = ({ data }) => {
    const eventStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        borderRadius: '50% 50% 0 0 ',
        transition: 'transform ease-in-out 300ms',
        '&:hover': {
            transform: 'scale(1.1)',
        }
    }
    const evetnBoxStyle = {
        width: '320px',
        height: '320px',
        borderRadius: '50% 50% 0 0',
        objectFit: 'cover',
        padding: '35px',
        paddingBottom: '20px',
        backgroundColor: 'white',
    }

    const buttonStyleEvent = {
        padding: '0',
        borderRadius: '15px',
        backgroundColor: 'transparent',
        width: '50%',
        margin: '0 auto',
        color: '#ae735d',
        border: '1px solid #ae735d',
        '&:hover': {
            color: 'white',
            backgroundColor: '#ae735d'
        }
    }

    const figureCaption = {
        position: 'relative',
        display: 'block',
        zIndex: ' 99',
        width: '100%',
        margin: '0 auto',
        '::after': {
            backgroundImage: 'url(https://sugartown.vn/img/chantrangtintuc.png)',
            content: "''",
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            backgroundSize: '100% 100%',
            height: '100%',
            zIndex: ' -1'
        }

    }

    // const containerRef = useRef()
    // const [current, setCurrent] = useState(1)
    // const [translateX, setTranslateX] = useState(1)

    const slides = useMemo(() => {

        let items = data.map((event) => (
            <Box
                key={event.position}
                flex={"1 0 33.33333%"}
                overflow={'hidden'}
            >
                <Link >
                    <Box sx={evetnBoxStyle}>
                        <Box component="img" sx={eventStyle} src={event.url} alt="" />
                    </Box>
                </Link>
                <Box sx={figureCaption}>
                    <Box sx={{ width: '70%', margin: '0 auto' }}>
                        <Box textAlign={'center'}  >
                            <a style={{ textOverflow: 'ellipsis', zIndex: "10000", color: '#ae735d' }} >
                                {event.title}
                            </a>
                            <p style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', zIndex: '1000' }}>{event.description}</p>
                        </Box>
                        <Stack >
                            <Button sx={buttonStyleEvent}>xem them</Button>
                            {/* <Button sx={{ display: { xs: 'block', sm: 'none' }, borderRadius: '15px', backgroundColor: 'transparent' }} >Tat ca bai viet</Button> */}
                        </Stack>
                    </Box>
                </Box>
            </Box >
        ))

        return [
            ...items,
            <Box
                key={data.length + 1}
                flex={"1 0 33.33333%"}
                overflow={'hidden'}
            >
                <Link >
                    <Box sx={evetnBoxStyle}>
                        <Box component="img" sx={eventStyle} src={data[0].url} alt="" />
                    </Box>
                </Link>
                <Box sx={figureCaption}>
                    <Box sx={{ width: '70%', margin: '0 auto' }}>
                        <Box textAlign={'center'}  >
                            <a style={{ textOverflow: 'ellipsis', zIndex: "10000", color: '#ae735d' }} >
                                {data[0].title}
                            </a>
                            <p style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', zIndex: '1000' }}>{data[0].description}</p>
                        </Box>
                        <Stack >
                            <Button sx={buttonStyleEvent}>xem them</Button>
                            {/* <Button sx={{ display: { xs: 'block', sm: 'none' }, borderRadius: '15px', backgroundColor: 'transparent' }} >Tat ca bai viet</Button> */}
                        </Stack>
                    </Box>
                </Box>
            </Box >,
            <Box
                key={data.length + 2}
                flex={"1 0 33.33333%"}
                overflow={'hidden'}
            >
                <Link >
                    <Box sx={evetnBoxStyle}>
                        <Box component="img" sx={eventStyle} src={data[1].url} alt="" />
                    </Box>
                </Link>
                <Box sx={figureCaption}>
                    <Box sx={{ width: '70%', margin: '0 auto' }}>
                        <Box textAlign={'center'}  >
                            <a style={{ textOverflow: 'ellipsis', zIndex: "10000", color: '#ae735d' }} >
                                {data[1].title}
                            </a>
                            <p style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', zIndex: '1000' }}>{data[1].description}</p>
                        </Box>
                        <Stack >
                            <Button sx={buttonStyleEvent}>xem them</Button>
                            {/* <Button sx={{ display: { xs: 'block', sm: 'none' }, borderRadius: '15px', backgroundColor: 'transparent' }} >Tat ca bai viet</Button> */}
                        </Stack>
                    </Box>
                </Box>
            </Box >,
            <Box
                key={data.length + 3}
                flex={"1 0 33.33333%"}
                overflow={'hidden'}
            >
                <Link >
                    <Box sx={evetnBoxStyle}>
                        <Box component="img" sx={eventStyle} src={data[2].url} alt="" />
                    </Box>
                </Link>
                <Box sx={figureCaption}>
                    <Box sx={{ width: '70%', margin: '0 auto' }}>
                        <Box textAlign={'center'}  >
                            <a style={{ textOverflow: 'ellipsis', zIndex: "10000", color: '#ae735d' }} >
                                {data[2].title}
                            </a>
                            <p style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', zIndex: '1000' }}>{data[2].description}</p>
                        </Box>
                        <Stack >
                            <Button sx={buttonStyleEvent}>xem them</Button>
                            {/* <Button sx={{ display: { xs: 'block', sm: 'none' }, borderRadius: '15px', backgroundColor: 'transparent' }} >Tat ca bai viet</Button> */}
                        </Stack>
                    </Box>
                </Box>
            </Box >,
        ]
    }, [data])

    // const handlerNextSlide = useCallback(() => {
    //     // console.log(current);
    //     if (current < data.length) {
    //         setCurrent(prev => prev + 1)
    //         setTranslateX(1 / 3 * (current + 1))

    //     } else if (current >= data.length) {
    //         setCurrent(0)
    //         setTranslateX(1 / 3 * (data.length))
    //     }
    // }, [current, data])



    // useEffect(() => {
    //     setInterval(() => {
    //         handlerNextSlide()
    //     }, 2000)
    // }, [handlerNextSlide])


    return (
        <div style={{ position: 'relative' }}>
            <Stack flexDirection={'row'} sx={{ overflow: 'hidden', width: { md: "750px", lg: "960px" }, mx: 'auto ' }} spacing={0}>
                {slides}
            </Stack>
            {/* <Button sx={{ position: 'absolute', top: '0', color: 'red', height: '200px', width: ' 100%' }} onClick={handlerNextSlide}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Button> */}
        </div>
    )
}

export default Carousel_event