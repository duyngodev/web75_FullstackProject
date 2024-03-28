import { Box } from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import VpnKeyOffIcon from "@mui/icons-material/VpnKeyOff";

const Register = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const repeatPasswordRef = useRef();
  const [errType, setErrType] = useState([]);
  const [show, setShow] = useState(false);
  const [showRePass, setShowRePass] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const repeatPassword = repeatPasswordRef.current.value;
    await axios
      .post("http://localhost:3001/user/register", {
        name,
        email,
        password,
        repeatPassword,
      })
      .then(() => {
        setErrType([]);
        window.location.href = "/login";
      })
      .catch((err) => {
        setErrType(err.response.data);
      });
    // console.log(errType);
  };
  return (
    <>
      <div className="registerPage">
        <div className="registerWrapper">
          <Box
            component="form"
            sx={{
              fontSize: {
                md: "1.2rem",
                sx: "0.8rem",
                sm: "1rem",
                lg: "1.4rem",
              },
            }}
            className="register"
            onSubmit={submitHandler}>
            <h3 className="title">REGISTER</h3>
            <div className="inputBox">
              <div
                className={`input_icon ${
                  errType.includes("name") ? "error" : ""
                }`}>
                <input
                  className={`${errType.includes("name") ? "error" : ""}`}
                  type="text"
                  name="name"
                  id=""
                  placeholder="Name"
                  ref={nameRef}
                />
                <div className="registerIcon">
                  <PersonIcon />
                </div>
              </div>
              <div
                className={`input_icon ${
                  errType.includes("email") ? "error" : ""
                }`}>
                <input
                  className={`${errType.includes("email") ? "error" : ""}`}
                  type="email"
                  name="email"
                  id=""
                  placeholder="Email"
                  ref={emailRef}
                />
                <div className="registerIcon">
                  <MailIcon />
                </div>
              </div>

              <div
                className={`input_icon ${
                  errType.includes("password") ? "error" : ""
                }`}>
                <input
                  className={`${errType.includes("password") ? "error" : ""}`}
                  type={`${show ? "text" : "password"}`}
                  name="name"
                  id=""
                  placeholder="Password"
                  ref={passwordRef}
                />
                <div className="registerIcon">
                  {show && (
                    <VpnKeyOffIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => setShow(false)}
                    />
                  )}
                  {!show && (
                    <VpnKeyIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => setShow(true)}
                    />
                  )}
                </div>
              </div>

              <div
                className={`input_icon ${
                  errType.includes("repeatPassword") ? "error" : ""
                }`}>
                <input
                  className={`${
                    errType.includes("repeatPassword") ? "error" : ""
                  }`}
                  type={`${showRePass ? "text" : "password"}`}
                  name="name"
                  id=""
                  placeholder="Repeat Password"
                  ref={repeatPasswordRef}
                />
                <div className="registerIcon">
                  {showRePass && (
                    <VpnKeyOffIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => setShowRePass(false)}
                    />
                  )}
                  {!showRePass && (
                    <VpnKeyIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => setShowRePass(true)}
                    />
                  )}
                </div>
              </div>
            </div>
            <button className="submitBtn" type="submit">
              Register
            </button>
          </Box>
        </div>
      </div>
      <div
        className="backgroundRegister"
        style={{
          background:
            "url('https://img.freepik.com/free-vector/seamless-sweet-pastries_1284-3605.jpg?w=740&t=st=1710603766~exp=1710604366~hmac=e53ef6823164d512edeab756bd076e4f77605914c258fff589101dcb1ca77481') repeat",
          // backgroundPosition: "cover",
          position: "absolute",
          inset: "0",
          zIndex: "-99",
          objectFit: "cover",
        }}></div>
    </>
  );
};

export default Register;
