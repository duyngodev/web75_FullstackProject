import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddCircle from '@mui/icons-material/AddCircle';
import RemoveCircle from '@mui/icons-material/RemoveCircle';
import HighlightOff from '@mui/icons-material/HighlightOff';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const [voucher, setVoucher] = useState('')
    const [input, setInput] = useState('')
    const { data, setData } = props
    const totalPrice = data?.reduce((total, value) => {
        return total + value.quantityInCart * value.price
    }, 0)
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    const totalCart = data?.reduce((total, value) => {
        return total + value.quantityInCart
    }, 0)
    const totalAmount = data?.reduce((total, value) => {

        return total + value.id
    }, 0)

    const deleteBtClickHandler = (id) => {
        const newStateCart = data?.filter((cartItem) => {
            if (cartItem.id != id) {
                return true
            }
        })
        localStorage.setItem("cart", JSON.stringify(newStateCart))
        setData(newStateCart)
    }
    const decreaseBtClickHandler = (cartItem) => {
        const indexElement = data?.findIndex((cartItemLoop) => {
            return cartItemLoop.id == cartItem.id
        })
        const cartNewState = [...data]
        cartNewState[indexElement] = { ...cartItem }
        cartNewState[indexElement].quantityInCart--
        localStorage.setItem("cart", JSON.stringify(cartNewState))
        setData(cartNewState)
    }

    const increaseBtClickHandler = (cartItem) => {
        const indexElement = data?.findIndex((cartItemLoop) => {
            return cartItemLoop.id == cartItem.id
        })
        const cartNewState = [...data]
        cartNewState[indexElement] = { ...cartItem }
        cartNewState[indexElement].quantityInCart++
        localStorage.setItem("cart", JSON.stringify(cartNewState))
        setData(cartNewState)
    }
    const handleClickVoucher = () => {
        setInput('')
        if (input.includes("G3BA")) {
            alert("Chúc mừng bạn nhận được Voucher 10%")
            return setVoucher((totalPrice * 0.1))
        } if (input.includes("G3BB")) {
            alert("Chúc mừng bạn nhận được Voucher 15%")
            return setVoucher((totalPrice * 0.15))
        } if (input.includes("G3BC")) {
            alert("Chúc mừng bạn nhận được Voucher 20%")
            return setVoucher((totalPrice * 0.2))
        } else {
            alert('Voucher của bạn không tồn tại')
            return setVoucher('')
        }
    }
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const theme = createTheme({
        palette: {
            ochre: {
                main: '#FF8080',
                light: '#E9DB5D',
                dark: '#CE5A67',
                contrastText: 'white',
            },
        },
    });
    const cartsCheckAmountNoEmpty = data?.filter((cartItem) => {
        if (cartItem.quantityInCart > 0) {
            return true
        }
    })
    if (!data || data?.length == 0 || cartsCheckAmountNoEmpty?.length == 0) {
        return (
            <Grid container spacing={2} columns={16} sx={{
                backgroundImage: 'linear-gradient(#FFFFFF, #FDEDEF )',

                fontSize: '14px',
                fontWeight: '400',
                paddingBottom: '300px',
                marginTop: '50px',
            }}>
                <Grid item lg={1} sm={1} xs={1}></Grid>
                <Grid item lg={7} sm={7} xs={16}>
                    <h2 style={{ textAlign: 'center', fontSize: '18px' }}>Giỏ hàng của tôi ({data?.length})</h2>
                    <p style={{ textAlign: 'center', fontSize: '14px' }}>Không có sản phẩm trong giỏ hàng !!!</p>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    <Stack direction="row" spacing={2} style={{ marginTop: '30px' }}>
                        <TextField
                            id="filled-textarea"
                            label="Nhập mã voucher của bạn (nếu có):"
                            placeholder="Ex: G3BE12345678"
                            multiline
                            variant="filled"
                            style={{ width: '100%', padding: '10px' }}
                            color="warning"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            inputProps={{
                                maxLength: "9"
                            }}
                        />
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" sx={{
                                width: '150px',
                                height: '40px',
                                fontSize: '15px',
                                backgroundColor: '#9e553b',
                                color: 'white',
                            }} onClick={handleClickVoucher}>
                                Áp dụng
                            </Button>
                        </ThemeProvider>
                    </Stack>
                </Grid >
                <Grid item lg ></Grid>
                <Grid item lg={6} sm={5} xs={16} sx={{
                    backgroundColor: '#ffdec5',
                    padding: '20px',
                    height: '100%',
                }}>
                    <Grid item lg={16}>
                        <h3 style={{ textAlign: 'center' }}>Thông tin đơn hàng</h3>
                    </Grid>
                    <Grid item lg={16}>
                        <p>Các món giao ngay ({data?.length})</p>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item lg>
                            <p>Tổng đơn :</p>
                        </Grid>
                        <Grid item lg={4} md={8} sm={7.6} xs={9}>
                            <p style={{ textAlign: 'right' }}>{VND.format(totalPrice)}</p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item lg>
                            <p>Bạn được giảm :</p>
                        </Grid>
                        <Grid item lg={4} md={6.8} sm={6} xs={8}>
                            <p style={{ textAlign: 'right' }}>{VND.format(voucher)}</p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item lg sm={5.5}>
                            <h6>Tổng tiền thanh toán :</h6>
                        </Grid>
                        <Grid item lg={4} md={4.5} sm xs={6}>
                            <p style={{ textAlign: 'right' }}>{VND.format(totalPrice - voucher)}</p>
                        </Grid>
                    </Grid>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    <Stack spacing={2} sx={{ marginTop: '20px' }}>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" sx={{
                                width: '100%',
                                height: '100%',
                                fontSize: '15px',
                                backgroundColor: '#fbdbe0',
                                color: 'white'
                            }}>
                                <Link to="/products" style={{ color: 'white' }}>Tiếp tục mua hàng</Link>
                            </Button>
                        </ThemeProvider>
                    </Stack>
                </Grid>
                <Grid item lg={1} sm={1} xs={1}></Grid>
            </Grid>
        )
    }
    return (
        <>
            <Grid container spacing={2} columns={16} sx={{
                backgroundImage: 'linear-gradient(#FFFFFF, #FDEDEF )',

                fontSize: '14px',
                fontWeight: '400',
                paddingBottom: '300px',
                marginTop: '50px',
            }}>
                <Grid item lg={1} sm={1} xs={1}></Grid>
                <Grid item lg={7} sm={7} xs={16}>
                    <h2 style={{ textAlign: 'center', fontSize: '18px' }}>Giỏ hàng của tôi ({data?.length})</h2>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    <Grid container spacing={2}>
                        <Grid item lg={12} md={12} xs={12}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={1}>
                                    <Grid item lg={4.8} md={5} sm={6} xs={4.5}>
                                        <p>Chi tiết món</p>
                                    </Grid>
                                    <Grid item lg={2.2} md={2.2} sm={2} xs={2} >
                                        <p>Giá</p>
                                    </Grid>
                                    <Grid item lg sm xs={2.5}>
                                        <p>Số lượng</p>
                                    </Grid>
                                    <Grid item lg={2.4} md={2.8} sm={2} >
                                        <p>Tổng tiền</p>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item lg md>
                            {data?.map((cartItem) => {
                                if (cartItem.quantityInCart > 0) {
                                    return (
                                        <Box key={cartItem.id} sx={{ flexGrow: 1 }}>
                                            <Grid container spacing={2}>
                                                <Grid item lg={2} md={2} sm={1} xs={2}>
                                                    <img src={cartItem.img1} style={{ height: '50px', width: '50px' }} alt="" />
                                                </Grid>
                                                <Grid item lg={2.5} md={2.5} sm={1.8} xs={2}>
                                                    <p>{cartItem.name}</p>
                                                </Grid>
                                                <Grid item lg={2.3} md={2.3} sm={2.3} xs={2.2}>
                                                    <p>{VND.format(cartItem.price)}</p>
                                                </Grid>
                                                <Grid item lg={2.2} md={2.2} sm={2.3} xs={2}>
                                                    <Stack direction="row" spacing={1} >
                                                        <RemoveCircle fontSize='small' sx={{
                                                            color: '#eeeeee', minWidth: '20px',
                                                            width: 'auto',
                                                            transition: 'all 300ms ease'
                                                        }} onClick={() => (decreaseBtClickHandler(cartItem))} />
                                                        <p>{cartItem.quantityInCart}</p>
                                                        <AddCircle fontSize='small' sx={{
                                                            color: '#eeeeee', minWidth: '20px',
                                                            width: 'auto',
                                                            transition: 'all 300ms ease'
                                                        }} onClick={() => (increaseBtClickHandler(cartItem))} />
                                                    </Stack>
                                                </Grid>
                                                <Grid item lg={2} md={2} sm={2.3} xs={2.5}>
                                                    <p style={{ textAlign: 'end' }}>{VND.format(cartItem.quantityInCart * cartItem.price)}</p>
                                                </Grid>
                                                <Grid item lg={0.6}>
                                                    <HighlightOff fontSize='small' onClick={() => (deleteBtClickHandler(cartItem.id))} />
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    )
                                }
                            })}
                        </Grid>
                    </Grid>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    <Stack direction="row" spacing={2} style={{ marginTop: '30px' }}>
                        <TextField
                            id="filled-textarea"
                            label="Nhập mã voucher của bạn (nếu có):"
                            placeholder="Ex: G3BE12345678"
                            multiline
                            variant="filled"
                            style={{ width: '100%', padding: '10px' }}
                            color="warning"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            inputProps={{
                                maxLength: "9"
                            }}
                        />
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" sx={{
                                width: '150px',
                                height: '40px',
                                fontSize: '15px',
                                backgroundColor: '#9e553b',
                                color: 'white',
                            }} onClick={handleClickVoucher}>
                                Áp dụng
                            </Button>
                        </ThemeProvider>
                    </Stack>
                </Grid >
                <Grid item lg ></Grid>
                <Grid item lg={6} sm={5} xs={16} sx={{
                    backgroundColor: '#ffdec5',
                    padding: '20px',
                    height: '100%',
                }}>
                    <Grid item lg={16}>
                        <h3 style={{ textAlign: 'center' }}>Thông tin đơn hàng</h3>
                    </Grid>
                    <Grid item lg={16}>
                        <p>Các món giao ngay ({data?.length})</p>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item lg>
                            <p>Tổng đơn :</p>
                        </Grid>
                        <Grid item lg={4} md={8} sm={7.6} xs={9}>
                            <p style={{ textAlign: 'right' }}>{VND.format(totalPrice)}</p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item lg>
                            <p>Bạn được giảm :</p>
                        </Grid>
                        <Grid item lg={4} md={6.8} sm={6} xs={8}>
                            <p style={{ textAlign: 'right' }}>{VND.format(voucher)}</p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item lg sm={5.5}>
                            <h6>Tổng tiền thanh toán :</h6>
                        </Grid>
                        <Grid item lg={4} md={4.5} sm xs={6}>
                            <p style={{ textAlign: 'right' }}>{VND.format(totalPrice - voucher)}</p>
                        </Grid>
                    </Grid>
                    <hr style={{ backgroundColor: 'black', borderColor: 'transparent', borderWidth: '0.5px' }} />
                    <Stack spacing={2} sx={{ marginTop: '20px' }}>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" sx={{
                                width: '100%',
                                height: '100%',
                                fontSize: '15px',
                                backgroundColor: '#9e553b',
                                color: 'white'
                            }}>
                                Thanh Toán
                            </Button>
                        </ThemeProvider>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" sx={{
                                width: '100%',
                                height: '100%',
                                fontSize: '15px',
                                backgroundColor: '#fbdbe0',
                                color: 'white'
                            }}>
                                <Link to="/products" style={{ color: 'white' }}>Tiếp tục mua hàng</Link>
                            </Button>
                        </ThemeProvider>
                    </Stack>
                </Grid>
                <Grid item lg={1} sm={1} xs={1}></Grid>
            </Grid>
        </>
    )
}

export default Cart