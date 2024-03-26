import { Box, Stack, Container } from "@mui/material";
import LandingList from "../components/duydev/Landing/LandingList.jsx";

const Landing = () => {
  const link = [
    {
      url: "https://sugartown.vn/img/icontrangchu.png",
      alt: "Trang chủ",
      title: "TRANG CHỦ",
      path: "/home",
    },
    {
      url: "https://sugartown.vn/img/iconsanpham.png",
      alt: "Sản phẩm",
      title: "SẢN PHẨM DỊCH VỤ",
      path: "/service",
    },
    {
      url: "https://sugartown.vn/img/iconlogo.png",
      alt: "Logo",
      title: "CÂU CHUYỆN THƯƠNG HIỆU",
      path: "",
    },
    {
      url: "https://sugartown.vn/img/icontintuc.png",
      alt: "Tin tức",
      title: "TIN TỨC SỰ KIỆN",
      path: "",
    },
    {
      url: "https://sugartown.vn/img/iconkhuyenmai.png",
      alt: "Khuyến mãi",
      title: "CHƯƠNG TRÌNH KHUYẾN MÃI",
      path: "",
    },
    {
      url: "https://sugartown.vn/img/iconlienhe.png",
      alt: "Liên hệ",
      title: "LIÊN HỆ",
      path: "",
    },
  ];
  return (
    <Container maxWidth="md">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={{ sm: "space-between" }}
        sx={{
          position: "absolute",
          top: { xs: "50%", sm: "50%" },
          transform: { sm: "translateY(-50%)" },
          left: "0",
          right: "0",
          padding: { xs: "0", sm: "0 5%", lg: "0 10%" },
        }}>

        <LandingList link={[link[0], link[1], link[2]]} />
        <LandingList link={[link[3], link[4], link[5]]} />
      </Stack>
      <Box
        sx={{
          background: {
            xs: "url('https://sugartown.vn/img/bgnavi1.jpg') no-repeat",
            sm: "url('https://sugartown.vn/img/bgnavi.png') no-repeat",
          },
          backgroundPosition: { xs: "center", sm: "center" },
          backgroundSize: {
            xs: "100% 100%",
            sm: "150% 100%",
            md: "140% 100%",
            lg: "110% 100%",
          },
          height: "100vh",
          position: "absolute",
          inset: "0",
          zIndex: "-99",
          objectFit: "cover",

        }}
      />
    </Container>
  );
};

export default Landing;
