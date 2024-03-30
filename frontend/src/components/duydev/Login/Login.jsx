import { Box, Button, Stack } from "@mui/material";
import React, { useRef, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../nhandev/actions.jsx";
const Login = ({ prevLocation }) => {
  const navigate = useNavigate();
  // State config
  const inputEmail = useRef();
  const inputPassword = useRef();
  const [errType, setErrType] = useState([]);
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;
    console.log(email, password);
    await axios
      .post(
        `https://backendtestdn.onrender.com/user/login`,
        { email, password },
        { withCredentials: true } // NEED TO CORS with coookies
      )
      .then((response) => {
        const { userId, sessionId, userRole } = response.data;
        console.log(userId); // Lấy userId từ response
        dispatch(setUser(userId));
        setErrType([]);
        localStorage.setItem(
          "user",
          JSON.stringify({ userId, sessionId, userRole })
        );
        naviigate("/Home");
      })
      .catch((err) => {
        setErrType(err.response.data);
      });
  };

  return (
    <>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}>
        <Stack
          className="wrapper"
          sx={{
            background: "#FFFFFF40",
            color: "#FFF",
            width: "40%",
            minWidth: { xs: "350px", sm: "450px" },
            padding: "30px 40px",
            borderRadius: "10px",
            backdropFilter: "blur(60px)",
            border: "2px solid #FFFFFF80",
            boxShadow: "0 0 10px #FFFFFF20",
          }}>
          <Box
            component="form"
            onSubmit={submitHandler}
            sx={{
              fontSize: {
                md: "1.2rem",
                sx: "0.8rem",
                sm: "1rem",
                lg: "1.4rem",
              },
            }}>
            <h3
              style={{
                fontSize: "52px",
                textAlign: "center",
                color: "#FC294A",
                textShadow: `-5px -5px 5px #fff,
                0   -5px 5px #fff,
                5px -5px 5px #fff,
                5px  0  5px #fff,
                5px  5px 5px #fff,
                0    5px 5px #fff,
               -5px  5px 5px #fff,
               -5px  0   5px #fff`,
              }}>
              Login
            </h3>
            <Box
              className="input-box"
              sx={{
                width: "100%",
                height: "50px",
                margin: "30px 0",
                position: "relative",
              }}>
              <Box
                ref={inputEmail}
                component="input"
                type="text"
                placeholder="Email"
                sx={{
                  width: "100%",
                  height: "100%",
                  background: errType.includes("password")
                    ? "#FFEEEE"
                    : "transparent",
                  outline: "none",
                  border: `2px solid ${
                    errType.includes("email") ? "#e7195a" : "#FFFFFF20"
                  }`,
                  borderRadius: "40px",
                  padding: "20px 45px 20px 20px",
                  color: errType.includes("email") ? "#e7195a" : "#FFFFFF",
                  "&::placeholder": {
                    color: errType.includes("email") ? "#e7195a" : "#FFFFFF",
                  },
                  "&:focus": {
                    border: `2px solid ${
                      errType.includes("email") ? "#e7195a" : "#FFFFFF"
                    }`,
                    // background: "transparent",
                    color: errType.includes("email") ? "#000" : "#FFFFFF",
                    "&::placeholder": {
                      color: errType.includes("email") ? "#e7195a" : "#FFFFFF",
                    },
                  },
                }}
              />
              <PersonIcon
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "20px",
                  color: `${errType.includes("email") ? "#e7195a" : "#FFFFFF"}`,
                }}
              />
            </Box>
            <Box
              className="input-box"
              sx={{
                width: "100%",
                height: "50px",
                margin: "30px 0",
                position: "relative",
              }}>
              <Box
                ref={inputPassword}
                component="input"
                sx={{
                  width: "100%",
                  height: "100%",
                  background: errType.includes("password")
                    ? "#FFEEEE"
                    : "transparent",
                  outline: "none",
                  border: `2px solid ${
                    errType.includes("password") ? "#e7195a" : "#FFFFFF20"
                  }`,
                  borderRadius: "40px",
                  padding: "20px 45px 20px 20px",
                  color: errType.includes("password") ? "#e7195a" : "#FFFFFF",
                  "&::placeholder": {
                    color: errType.includes("password") ? "#e7195a" : "#FFFFFF",
                  },
                  "&:focus": {
                    border: `2px solid ${
                      errType.includes("password") ? "#e7195a" : "#FFFFFF"
                    }`,
                    // background: "transparent",
                    color: errType.includes("password") ? "#000" : "#FFFFFF",
                    "&::placeholder": {
                      color: errType.includes("password")
                        ? "#e7195a"
                        : "#FFFFFF",
                    },
                  },
                }}
                type="password"
                placeholder="Password"
              />
              <LockPersonIcon
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "20px",
                  color: `${
                    errType.includes("password") ? "#e7195a" : "#FFFFFF"
                  }`,
                }}
              />
            </Box>

            <Stack
              className="remember-forgot"
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "0 10px",
              }}>
              <label htmlFor="remember-me">
                <input
                  type="checkbox"
                  name=""
                  id="remember-me"
                  style={{ marginRight: "7px", accentColor: "#FFF" }}
                />
                Remember me
              </label>
              <Box
                component="a"
                href="#"
                sx={{
                  color: "#FFF",
                }}>
                Forgot password?
              </Box>
            </Stack>
            <Button
              type="submit"
              sx={{
                width: "100%",
                height: "45px",
                outline: "none",
                border: "none",
                borderRadius: "40px",
                backgroundColor: "#FFF",
                margin: "15px 0 12px 0",
                boxShadow: "0 0 10px #00000010",
                fontWeight: "600",
                color: "#333",
                transition: "all 200ms linear",
                "&:hover": {
                  background: "#FFFFFF99",
                },
              }}>
              Login
            </Button>
            <Box
              className="register-link"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <p style={{ margin: "0 50px 0 0" }}>Don't have an account? </p>
              <Box
                component="a"
                href="/register"
                sx={{
                  color: "#FFF",
                }}>
                Register
              </Box>
            </Box>
          </Box>
        </Stack>
      </Stack>
      <Box
        sx={{
          background:
            "url('https://img.freepik.com/free-vector/candy-sweets-cakes-seamless-pattern-background-endless-tasty-cream-vector-illustration_1284-42446.jpg?w=740&t=st=1710606243~exp=1710606843~hmac=af12eb347adcd9e6721914fda8a08251754f6f5776819037ddd4d5c3f983b299') repeat",
          backgroundPosition: "cover",
          position: "absolute",
          inset: "0",
          zIndex: "-99",
        }}
      />
    </>
  );
};

export default Login;
