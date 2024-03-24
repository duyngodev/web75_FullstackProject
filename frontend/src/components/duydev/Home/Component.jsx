import { Box, Button, Stack } from "@mui/material";
import React from "react";

/*   position: 8,
      url: "	https://sugartown.vn/thumb/365x360/1/upload/tin3cap/255td-16795646275.png",
      title: "25.03.2023 - CÙNG   SUGAR   TOWN   HƯỞNG   ỨNG   CHIẾN   DỊCH ",
      description:
        "JOIN THE BIGGEST HOUR FOR EARTH\nGiờ Trái Đất - Hành động nhỏ, thay đổi lớn!", */
const Component = ({ data }) => {
  const eventStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: "50% 50% 0 0 ",
    transition: "transform ease-in-out 300ms",
    "&:hover": {
      transform: "scale(1.1)",
    },
  };
  const evetnBoxStyle = {
    // width: "",
    // height: "320px",
    borderRadius: "50% 50% 0 0",
    objectFit: "cover",
    padding: "35px",
    paddingBottom: "20px",
    backgroundColor: "white",
  };

  const buttonStyleEvent = {
    padding: "0",
    borderRadius: "15px",
    backgroundColor: "transparent",
    width: "50%",
    margin: "0 auto",
    color: "#ae735d",
    border: "1px solid #ae735d",
    "&:hover": {
      color: "white",
      backgroundColor: "#ae735d",
    },
  };

  const figureCaption = {
    position: "relative",
    display: "block",
    zIndex: " 99",
    width: "100%",
    // p: "0 35px 0 35px",
    // margin: "0 auto",
    "::after": {
      backgroundImage: "url(https://sugartown.vn/img/chantrangtintuc.png)",
      content: "''",
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "100%",
      backgroundSize: "100% 100%",
      height: "100%",
      zIndex: " -1",
    },
  };

  return (
    <Box>
      <Box sx={evetnBoxStyle}>
        <Box component="img" sx={eventStyle} src={data.url} alt="" />
      </Box>
      <Box sx={figureCaption}>
        <Box>
          <Box textAlign={"center"}>
            <a
              style={{
                textOverflow: "ellipsis",
                color: "#ae735d",
              }}>
              {data.title}
            </a>
            <p
              style={{
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                padding: "0 35px 0 35px",
              }}>
              {data.description}
            </p>
          </Box>
          <Stack>
            <Button sx={buttonStyleEvent}>xem thêm</Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Component;
