import { Stack, styled } from '@mui/material'
import LandingItem from './LandingItem'



const LandingList = ({ link }) => {
    const linkItem = link
    const StackResponsive = styled(Stack)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        [theme.breakpoints.up("sm")]: {
            flexDirection: 'column',
        }
    }))
    return (
        <StackResponsive >
            {linkItem.map((item, index) => {
                return (<LandingItem key={index} src={item.url} alt={item.alt} title={item.title} link={item.path} />)
            })}
        </StackResponsive>

    )
}

export default LandingList