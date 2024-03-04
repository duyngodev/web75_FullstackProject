import { Box, Container } from '@mui/material'
import { useState } from 'react'
import Carousel_event from './Carousel_event'


const Discount = () => {

    const imgStyle = {
        width: '340px',
        height: '100%',
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translateX(-50%)',
    }

    const dataEvents = [{
        position: 1,
        url: 'https://sugartown.vn/thumb/365x360/1/upload/tinnho/asset-2-16970926169.png',
        title: 'BUỔI TIỆC LÃNG MẠN - DÀNH TẶNG NÀNG NGÀY 20/10',
        description: 'Ngày 20/10 là Ngày Phụ nữ Việt Nam, là dịp để cánh mày râu bày gửi những lời yêu thương đến chị em phụ nữ. Trong ngày ý nghĩa như vậy chắc chắn không thể thiếu được bàn tiệc thịnh soạn dành tặng các chị em.'
    },
    {
        position: 2,
        url: '	https://sugartown.vn/thumb/365x360/1/upload/tin3cap/ban-sao-cua-28-16960629847.png',
        title: 'ĐẶT BÁNH NGAY - ƯU ĐÃI CHỈ CÒN TRONG HÔM NAY',
        description: 'Khi nhắc đến Sugar Town là không thể không nhắc đến Bánh Mì Phô Mai Tan Chảy - món bánh gây “thương nhớ” với bao khách hàng. Đặc biệt gần đây được rất nhiều bạn trẻ, các Hot Tiktoker săn đón và yêu thích do vị thơm ngon béo ngậy và dễ gây nghiện, mọi lứa '
    },
    {
        position: 3,
        url: '	https://sugartown.vn/thumb/365x360/1/upload/tin3cap/comotvinicegiualongsaigon-16615066899.JPG',
        title: 'CÓ MỘT VENICE GIỮA LÒNG SÀI GÒN',
        description: 'Lấy cảm hứng từ lối kiến trúc độc đáo, cùng bầu không khí lãng mạn, trang nhã từ thành phố Venice (Ý), Sugar Town khoác lên mình chiếc áo sang trọng nhưng không kém phần ấm cúng, gần gũi, khác biệt hoàn toàn so với những nhà hàng fine dining mà bạn từng b'
    },
    {
        position: 4,
        url: 'https://sugartown.vn/thumb/365x360/1/upload/tin3cap/countdown-16517301113.png',
        title: "NEW YEAR'S EVE PARTY 2022 ????",
        description: 'Tận hưởng trọn vẹn khoảng khắc bước sang năm mới cùng người thương và gia đình với chương trình ẩm thực đặc sắc và lễ hội âm nhạc countdown sống động tại Sugar Town - Nhà hàng ven sông đậm chất Âu ngay tại TP. Thủ Đức.'
    },
    {
        position: 5,
        url: 'https://sugartown.vn/thumb/365x360/1/upload/tin3cap/giang-sinh-16517289710.png',
        title: 'TẬN HƯỞNG ĐÊM GIÁNG SINH NGỌT NGÀO ',
        description: 'Tại nhà hàng đậm chất Venice thơ mộng!'
    },
    {
        position: 6,
        url: '	https://sugartown.vn/thumb/365x360/1/upload/tin3cap/thiet-ke-chua-co-ten-1-16517277964.png',
        title: 'GRAND OPENING SUGAR TOWN RESTAURANT',
        description: 'Bạn đã sẵn sàng để trải nghiệm một nền ẩm thực Châu Âu tuyệt hảo trong không gian kiến trúc đậm chất Venice lãng mạn chỉ có tại Sugar Town chưa?'
    },
    {
        position: 7,
        url: '	https://sugartown.vn/thumb/365x360/1/upload/tin3cap/thiet-ke-chua-co-ten-16511256857.png',
        title: '️ 02.12.2021 - SUGAR TOWN GRAND OPENING ️',
        description: "TƯNG BỪNG KHAI TRƯƠNG CỬA HÀNG ĐẦU TIÊN \nSau bao ngày háo hức chờ đợi, cửa hàng Sugar Town đầu tiên sẽ chính thức hoạt động tại thành phố Thủ Đức!"
    },
    {
        position: 8,
        url: '	https://sugartown.vn/thumb/365x360/1/upload/tin3cap/255td-16795646275.png',
        title: '25.03.2023 - CÙNG   SUGAR   TOWN   HƯỞNG   ỨNG   CHIẾN   DỊCH ',
        description: 'JOIN THE BIGGEST HOUR FOR EARTH\nGiờ Trái Đất - Hành động nhỏ, thay đổi lớn!'
    }]

    //Carousel interval
    const [position, setPosition] = useState(1)


    return (
        <Box >
            <Box position="relative" sx={{ width: '100%', height: '6.5em' }}>
                <img style={imgStyle} src="	https://sugartown.vn/img/txtchuongtrinhkhuyenmai2.png" alt="" />
            </Box>
            <Container p={'100px'}>
                <Carousel_event data={dataEvents} />
            </Container>
        </Box >
    )

}

export default Discount