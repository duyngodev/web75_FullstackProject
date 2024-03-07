import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ServicesComponent = ({ title, data }) => {
    const boxImg = {
        height: "90px",
        width: "72px",
        borderRadius: "35px 35px 10px 10px",
        border: "2px solid #f7b6a5",
        marginBottom: "5px",
        position: "relative",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: "#ae735d",
            color: "white"
        }
    }
    return (<>
        <Typography variant='h5' style={{ margin: '50px auto', textAlign: 'center' }}>{title}</Typography>
        <Stack flexDirection={'row'} justifyContent={"center"}>
            {data.map((item, index) => {
                return <Stack key={index} flexDirection={'column'}>
                    <Box margin={'0 40px 10px 40px'}>
                        <Box sx={boxImg}>
                            <img src={item.url} style={{ height: '50%' }} alt="" />
                        </Box>
                    </Box>
                    <Typography textAlign={'center'}>{item.name}</Typography>
                </Stack>
            })}
        </Stack>
    </>
    )
}

export default ServicesComponent