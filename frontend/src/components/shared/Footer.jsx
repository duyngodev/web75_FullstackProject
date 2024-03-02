import React from 'react'
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';
import Phone from '@mui/icons-material/Phone';
import LocationOn from '@mui/icons-material/LocationOn';
import Email from '@mui/icons-material/Email';
import Cake from '@mui/icons-material/Cake';



const Footer = () => {


    return (
        <>
            <div style={{
                background: "url('https://www.sugartown.vn/img/luonsongfooter.png') no-repeat center top",
                backgroundSize: '100% 100%',
                color: '#9e553b',
                paddingTop: '100px',
                marginTop: '-150px'
            }}>
                <div style={{ fontSize: '12px' }}>
                    <Grid container spacing={2}>
                        <Grid item lg={1} md={1.5} sm={1.5} xs={4}>
                            <p></p>
                        </Grid>
                        <Grid item lg={4} md={3.5} sm={3.2} xs={10}>
                            <p style={{ textAlign: 'center', fontSize:'20px' }}>CONTACT</p>
                            <h5>G3 Bakery</h5>
                            <Stack direction="row" spacing={1}>
                                <Phone sx={{fontSize:'16px'}} />
                                <p>0707155988</p>
                            </Stack>
                            <br />
                            <Stack direction="row" spacing={1} sx={{marginBottom:'50px'}}>
                                <LocationOn sx={{fontSize:'16px'}} />
                                <p>Số 10, Đường số 18, KDC Vạn Phúc,
                                    P. Hiệp Bình Phước, TP. HCM</p>
                            </Stack>
                        </Grid>
                        <Grid item lg={3.3} md={3.3} sm={3.3} xs={12}>
                            <p style={{fontSize:'20px'}}>GET SUGARY LETTERS</p>
                            <Stack direction="row" spacing={1} sx={{marginBottom:'20px'}}>
                                <Email sx={{fontSize:'16px'}}/>
                                <p>Email:</p>
                                <input type="text" placeholder='Đăng ký nhận bảng tin' style={{ paddingLeft: '10px', borderColor: '#FF8080', fontSize: '10px', width: '145px', height: '27px', borderRadius: '20px' }} />
                                <button style={{
                                    backgroundColor: '#9e553b', border: 'none', color: 'white', borderRadius: '10px', padding: '3px 10px', fontSize: '10px', position: 'relative',
                                    top: '35px', right: '45px', fontWeight: '600'
                                }}>Gửi</button>
                            </Stack>
                        </Grid>
                        <Grid item lg md sm>
                            <p style={{fontSize:'20px'}}>OUR PRODUCT</p>
                            <Stack direction="row" spacing={1} sx={{marginBottom:'50px'}}>
                                <Cake sx={{fontSize:'16px'}}/>
                                <p>Bakery Store</p>
                            </Stack>
                        </Grid>
                    </Grid>
                </div>
                <p style={{ backgroundColor: '#9e553b', color: 'white', textAlign: 'center', fontSize: '13px', padding: '5px', letterSpacing: '2px' }}>2023 G3 BAKERY All right reserved</p>
            </div>
        </>
    )
}

export default Footer