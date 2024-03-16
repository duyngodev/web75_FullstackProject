import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import ButtonIcon from "./ButtonIcon.jsx";

const LandingItem = ({ src, alt, title, link }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF30",
        boxShadow: "0 0 12px 12px #FFFFFF30",
        borderRadius: "35%",
      }}>
      <Link to={link}>
        <Box
          sx={{
            marginBottom: "25px",
            width: "105px",
          }}>
          <Box textAlign={"center"}>
            <ButtonIcon width={"100%"}>
              <img
                style={{ maxWidth: "100%", height: "auto" }}
                src={src}
                alt={alt}
              />
            </ButtonIcon>
          </Box>
          <Box
            sx={{
              fontSize: { xs: "12px", sm: "14px" },
              height: "38.5px",
              wordBreak: "break-word",
              width: "100%",
              textAlign: "center",
            }}>
            <p style={{ color: "#9d573c", padding: "6px" }}>{title}</p>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default LandingItem;
