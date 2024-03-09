import { Box, Button, FormControl, Input, Stack } from "@mui/material";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import axios from "axios";

const Login = () => {
  // State config
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errType, setErrType] = useState([]);
  console.log(errType);

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axios
      .post(`http://localhost:3001/user/login`, { email, password })
      .then((response) => {
        setErrType([]);
        console.log(response);
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
            background: "transparent",
            color: "#FFF",
            width: "40%",
            minWidth: { xs: "350px", sm: "450px" },
            padding: "30px 40px",
            borderRadius: "10px",
            backdropFilter: "blur(40px)",
            border: "2px solid #FFFFFF40",
            boxShadow: "0 0 10px #00000020",
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
                component="input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                sx={{
                  width: "100%",
                  height: "100%",
                  background: `transparent`,
                  outline: "none",
                  border: `2px solid ${
                    errType.includes("email") ? "#e7195a" : "#FFFFFF20"
                  }`,
                  borderRadius: "40px",
                  padding: "20px 45px 20px 20px",
                  color: "#FFFFFF",
                  "&::placeholder": { color: "#FFFFFF" },
                }}
              />
              <PersonIcon
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "20px",
                  color: `${
                    errType.includes("email") ? "#e7195a" : "#FFFFFF20"
                  }`,
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
                component="input"
                sx={{
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                  outline: "none",
                  border: `2px solid ${
                    errType.includes("password") ? "#e7195a" : "#FFFFFF20"
                  }`,
                  borderRadius: "40px",
                  padding: "20px 45px 20px 20px",
                  color: "#FFFFFF",
                  "&::placeholder": { color: "#FFFFFF" },
                }}
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
              />
              <LockPersonIcon
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "20px",
                  color: `${
                    errType.includes("password") ? "#e7195a" : "#FFFFFF20"
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
                margin: "10px 0",
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
                textAlign: "center",
              }}>
              <p>
                Don't have an account?{" "}
                <Box
                  component="a"
                  href="#"
                  sx={{
                    color: "#FFF",
                  }}>
                  Register
                </Box>
              </p>
            </Box>
          </Box>
        </Stack>
      </Stack>
      <Box
        sx={{
          background:
            "url('https://images.unsplash.com/photo-1604672857367-a0d662dfd7f2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat",
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
