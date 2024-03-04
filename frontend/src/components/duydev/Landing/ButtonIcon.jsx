import styled from '@emotion/styled'
import { Button } from '@mui/material'

const ButtonIcon = ({ children }) => {
    const ButtonIcon = styled(Button)({
        height: "90px",
        width: "72px",
        borderRadius: "35px 35px 10px 10px",
        border: "2px solid #f5b8a6",
        marginBottom: "5px",
        position: "relative",
        "&:hover": { backgroundColor: "white" },
        "&::after": {
            content: '""',
            top: "3px",
            left: "3px",
            height: "90px",
            width: "72px",
            borderRadius: "35px 35px 10px 10px",
            position: "absolute",
            zIndex: "-10",
            border: "2px solid #f5b8a6",
            borderStyle: "none solid solid none",
        }, "&::before": {
            content: '""',
            top: "10px",
            left: "10px",
            height: "90px",
            width: "72px",
            borderRadius: "35px 35px 10px 10px",
            position: "absolute",
            zIndex: "-10",
            border: "2px solid #f5b8a6",
            borderStyle: "none solid solid none",
        }
    })
    return (<>
        <ButtonIcon>
            {children}
        </ButtonIcon>

    </>
    )
}

export default ButtonIcon