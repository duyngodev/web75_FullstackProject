import { Box, Stack } from '@mui/material'
import { Link } from 'react-router-dom'

const NgotVaThuong = () => {
    const imgStyle = {
        width: '100%',
        objectFit: 'cover',
        margin: '10px 0',
    }

    const ngotVaThuongStyle = {
        width: '100%',
        height: '325px',
        maxHeight: '100%',
        // background: { xs: '#fdedee', sm: "url('https://sugartown.vn/img/bg1.png')" },
        backgroundImage: "url('https://sugartown.vn/img/bg1.png')",
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
        justifyContent: 'space-around',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',

    }

    const boxContainer = {
        height: '100%',
        cursor: 'pointer'
        // position: 'relative'
    }

    const buttonStyle = {
        width: { xs: '170px', sm: '190px' },
        maxWidth: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: 'url(https://sugartown.vn/upload/sanpham/3-190x195-16454141334.png)',
        "&:hover": {
            backgroundImage: 'url(https://sugartown.vn/upload/sanpham/9b239x24313-16489062652.png)'
        }
    }

    return (
        <>
            <Box component="img" sx={imgStyle} src="https://sugartown.vn/img/slogan.png" alt='sugatTown' />
            <Stack sx={ngotVaThuongStyle} >
                <Box justifyContent={'center'} sx={{ display: 'flex' }}>
                    <Link sx={boxContainer} to='/Service/CategoryListPage'>
                        <Box sx={{ width: '192px', height: '192px' }}>
                            <Box sx={buttonStyle}></Box>
                        </Box>
                    </Link>
                </Box>
                <Box justifyContent={'center'} sx={{ display: 'flex' }}>
                    <Link sx={boxContainer} >
                        <Box sx={{ width: '192px', height: '192px' }}>
                            <Box sx={buttonStyle}></Box>
                        </Box>
                    </Link>
                </Box>
            </Stack >


        </>)
}

export default NgotVaThuong