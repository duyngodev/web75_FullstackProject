import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const Logo = () => {
    return (
        <Stack flexDirection={'row'} sx={{ padding: '0 50px', background: '#9e553b' }}>
            <Box textAlign={'center'} sx={{ width: '800px', color: 'white', padding: '100px' }} flex={1}>
                <img style={{ width: '40%', marginLeft: '-200px' }} src="	https://sugartown.vn/img/titlecauchuyen.png
" alt="" />
                <Typography variant='h2' sx={{ textTransform: 'uppercase', fontWeight: '500' }}>thương hiệu</Typography>
                <Box sx={{ width: '40%', borderTop: '3px solid white', margin: '0 auto' }} />
                <Typography variant='subtitle1' sx={{ textTransform: 'uppercase', margin: '25px 0' }}>thị trấn của thi vị & ngọt ngào</Typography>
                <Typography variant='p'>Trong cuộc sống hiện đại chúng tôi thấu hiểu rằng một sản phẩm thực phẩm được bạn mong chờ nhiều hơn một trải nghiệm vị giác đơn thuần. Giữa vô vàn mùi vị chúng tôi đã chọn vị Ngọt để đặt nền móng cho những thấu hiểu đó và tạo nên Sugar Town với mong muốn mang đến cảm hứng và suy nghĩ về
                    Thị trấn của những điều ngọt ngào thi vị.</Typography>
                <Box component={Button} variant='contained' sx={{ margin: '20px 0', borderRadius: '9px', backgroundColor: 'white', color: '#9e553b', "&:hover": { color: 'white', backgroundColor: '#9e553b' } }}>Xem thêm</Box>

            </Box>
            <Box sx={{ height: ' 100%', verticalAlign: 'middle' }} flex={1} >
                <Box sx={{ margin: '50px auto', width: '370px', transition: 'transform ease-in-out 300ms', '&:hover': { transform: 'scale(1.1)' } }}>

                    <Box component={'img'} sx={{ width: '100%', height: '100%' }} src="https://sugartown.vn/upload/tinnho/hinh-cau-chuyen-thuong-hieu06-16454962899.png" alt="" />
                </Box>
            </Box>
        </Stack>
    )
}

export default Logo