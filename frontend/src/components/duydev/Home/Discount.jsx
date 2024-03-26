import { Box } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Component from "./Component";

const Discount = () => {
  const imgStyle = {
    width: "340px",
    height: "100%",
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translateX(-50%)",
  };

  const dataEvents = [
    {
      position: 2,
      url: "https://sugartown.vn/thumb/365x360/1/upload/tinnho/2546062532128656876440781563202557049884473n-16524972019.jpeg",
      title: "DUY NHẤT HÔM NAY 11.11 - TIỆM CHIÊU ĐÃI",
      description: "⚡ Phiên bản mix set 8 loại bánh tươi chỉ còn #111K ⚡",
    },
    {
      position: 3,
      url: "https://sugartown.vn/thumb/365x360/1/upload/tinnho/noi-dung-tin-tuc-su-kien-678x688--16474195092.png",
      title: "KHUYẾN MÃI NGẬP TRÀN MỪNG KHAI TRƯƠNG TIỆM",
      description:
        "Tiệm xin bật mí các hoạt động và ưu đãi hấp dẫn hàng đầu tiên tại Thành Phố Thủ Đức ngày 02.12:",
    },
    {
      position: 4,
      url: "https://sugartown.vn/thumb/365x360/1/upload/tinnho/artboard-2-16976132366.png",
      title: "ƯU ĐÃI VÔ VÀN - VÌ NÀNG XỨNG ĐÁNG",
      description:
        "⚡Tiệm ưu đãi trong tháng của nàng: - Giảm 10…8/20/2023 - Tặng kèm nến và thiệp chúc mừng 20/10",
    },
    {
      position: 5,
      url: "https://sugartown.vn/thumb/365x360/1/upload/tinnho/asset-2-17071222447.png",
      title:
        "BÁNH NGON ĐÓN TẾT - NHÀ NHÀ ĐỀU “KẾT” MỌI NGƯỜI ĐÃ CHUẨN BỊ ĐÓN TẾT ĐẾN ĐÂU RỒI??",
      description:
        "Nhà Sugar gợi ý 2 Combo bánh tươi cấp đông để tết …hịt Nguội Pizza Hải Sản Pizza 4 loại Phô Mai",
    },
    {
      position: 6,
      url: "https://sugartown.vn/thumb/365x360/1/upload/tinnho/asset-2-16970926169.png",
      title: "BUỔI TIỆC LÃNG MẠN - DÀNH TẶNG NÀNG NGÀY 20/10",
      description:
        "Ngày 20/10 là Ngày Phụ nữ Việt Nam, là dịp để cánh…ếu được bàn tiệc thịnh soạn dành tặng các chị em.",
    },
    {
      position: 7,
      url: "https://sugartown.vn/thumb/365x360/1/upload/tinnho/artboard-2-16964874781.png",
      title: "✨️MỪNG THÁNG CỦA NÀNG - NHẬN ƯU ĐÃI NGẬP TRÀN✨️",
      description:
        "Tháng tri ân “Phái Đẹp” , Tiệm mang đến vô v… App Food) đều được giảm 10% cho hóa đơn từ 300k.",
    },
    {
      position: 8,
      url: "https://sugartown.vn/thumb/365x360/1/upload/tinnho/2587479422187587170547756411284737309169345n-16524974355.jpeg",
      title: "COMBO BÁNH TƯƠI NGỌT & THƯƠNG",
      description:
        "Tiệm giới thiệu 3 Combo bánh tươi như những …ngọt ngào và yêu thương, cùng với ưu đãi đặc biệt",
    },
    {
      position: 10,
      url: "https://sugartown.vn/thumb/365x360/1/upload/tinnho/noi-dung-tin-tuc-su-kien-678x688--16474195092.png",
      title: "KHUYẾN MÃI NGẬP TRÀN MỪNG KHAI TRƯƠNG TIỆM",
      description:
        "Tiệm xin bật mí các hoạt động và ưu đãi hấp …a hàng đầu tiên tại Thành Phố Thủ Đức ngày 02.12:",
    },
    {
      position: 11,
      url: "https://sugartown.vn/thumb/365x360/1/upload/tinnho/artboard-2-16976132366.png",
      title: "ƯU ĐÃI VÔ VÀN - VÌ NÀNG XỨNG ĐÁNG",
      description:
        "⚡Tiệm ưu đãi trong tháng của nàng: - Giảm 10…8/20/2023 - Tặng kèm nến và thiệp chúc mừng 20/10",
    },
    {
      position: 12,
      url: "https://sugartown.vn/thumb/365x360/1/upload/tinnho/asset-2-17071222447.png",
      title:
        "BÁNH NGON ĐÓN TẾT - NHÀ NHÀ ĐỀU “KẾT” MỌI NGƯỜI ĐÃ CHUẨN BỊ ĐÓN TẾT ĐẾN ĐÂU RỒI??",
      description:
        "Nhà Sugar gợi ý 2 Combo bánh tươi cấp đông để tết …hịt Nguội Pizza Hải Sản Pizza 4 loại Phô Mai",
    },
    {
      position: 13,
      url: "https://sugartown.vn/thumb/365x360/1/upload/tinnho/asset-2-16970926169.png",
      title: "BUỔI TIỆC LÃNG MẠN - DÀNH TẶNG NÀNG NGÀY 20/10",
      description:
        "Ngày 20/10 là Ngày Phụ nữ Việt Nam, là dịp để cánh…ếu được bàn tiệc thịnh soạn dành tặng các chị em.",
    },
    {
      position: 14,
      url: "https://sugartown.vn/thumb/365x360/1/upload/tinnho/artboard-2-16964874781.png",
      title: "✨️MỪNG THÁNG CỦA NÀNG - NHẬN ƯU ĐÃI NGẬP TRÀN✨️",
      description:
        "Tháng tri ân “Phái Đẹp” , Tiệm mang đến vô v… App Food) đều được giảm 10% cho hóa đơn từ 300k.",
    },
  ];

  return (
    <Box>
      <Box position="relative" sx={{ width: "100%", height: "6.5em" }}>
        <img
          style={imgStyle}
          src="	https://sugartown.vn/img/txtchuongtrinhkhuyenmai2.png"
          alt=""
        />
      </Box>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper">
        {dataEvents.map((event) => {
          return (
            <SwiperSlide key={event.position}>
              <Component data={event} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Discount;
