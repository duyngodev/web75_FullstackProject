import React from 'react'
import ServicesComponent from './ServicesComponent'
import { Typography } from '@mui/material'

const Services = () => {
    const ourLocation = [{
        url: '	https://sugartown.vn/upload/tinnho/dv01-16405775786.png',
        name: 'Afternoon Tea'
    },
    {
        url: 'https://sugartown.vn/upload/tinnho/dv02-16405775851.png',
        name: 'Sunset Dinner'
    },
    {
        url: 'https://sugartown.vn/upload/tinnho/dv03-16405775921.png',
        name: 'Private Party'
    },
    {
        url: '	https://sugartown.vn/upload/tinnho/dv07-16405776263.png',
        name: 'Workshop'
    },
    {
        url: "	https://sugartown.vn/upload/tinnho/dv05-16405776091.png",
        name: '1 Day Camping'
    },
    {
        url: "https://sugartown.vn/upload/tinnho/dv06-16405776179.png",
        name: 'River Tour'
    }
    ]

    const yourLocation = [{
        url: '	https://sugartown.vn/upload/tinnho/dv07-16405776401.png',
        name: 'Tea Break'
    },
    {
        url: 'https://sugartown.vn/upload/tinnho/dv08-16405776505.png',
        name: 'Cozy Party'
    },
    {
        url: 'https://sugartown.vn/upload/tinnho/dv09-16405776571.png',
        name: ' Birthday Party'
    },
    {
        url: '	https://sugartown.vn/upload/tinnho/dv010-16405776677.png',
        name: 'Private Dinner'
    }

    ]

    return (
        <>
            <Typography variant={'h3'} sx={{ textTransform: 'uppercase', fontWeight: '500', margin: '40px 0', color: '#9c5136', textAlign: 'center' }}>Dịch vụ của chúng tôi</Typography>
            <ServicesComponent data={ourLocation} title='AT OUR LOCATION' />
            <ServicesComponent data={yourLocation} title='AT YOUR LOCATION' />
        </>
    )
}

export default Services