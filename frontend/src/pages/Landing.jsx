import { Box, Stack, Container } from "@mui/material"
import LandingList from "../Components/duydev/Landing/LandingList"

const Landing = () => {

  const link = [{
    url: "https://sugartown.vn/img/icontrangchu.png",
    alt: "Trang chủ",
    title: "TRANG CHỦ",
    path: '/home'
  },
  {
    url: "https://sugartown.vn/img/iconsanpham.png",
    alt: "Sản phẩm",
    title: "SẢN PHẨM DỊCH VỤ",
    path: '/service'
  },
  {
    url: "https://sugartown.vn/img/iconlogo.png",
    alt: "Logo",
    title: "CÂU CHUYỆN THƯƠNG HIỆU",
    path: ''

  },
  {
    url: "https://sugartown.vn/img/icontintuc.png",
    alt: "Tin tức",
    title: "TIN TỨC SỰ KIỆN",
    path: ''
  },
  {
    url: "https://sugartown.vn/img/iconkhuyenmai.png",
    alt: "Khuyến mãi",
    title: "CHƯƠNG TRÌNH KHUYẾN MÃI",
    path: ''
  },
  {
    url: "https://sugartown.vn/img/iconlienhe.png",
    alt: "Liên hệ",
    title: "LIÊN HỆ",
    path: ''
  },
  ]
  return (
    <Container sx={{ my: "10%" }}>
      <Stack direction={{ xs: "column", sm: "row" }} justifyContent={"space-between"} p={{ xs: "250px 0 0  0", sm: "0" }} >
        <LandingList link={[link[0], link[1], link[2]]} />
        <LandingList link={[link[3], link[4], link[5]]} />
      </Stack>
      <Box sx={{
        background: "url('https://sugartown.vn/img/bgnavi.png') no-repeat",
        backgroundPosition: { xs: 'center top ', sm: 'center center' },
        backgroundSize: { xs: '120% 80%', sm: '150% 100%', md: '100% 100%' },
        height: '100vh',
        position: "absolute",
        inset: "0",
        zIndex: "-99",
      }} />
    </Container >
  )
}

export default Landing