import axios from "axios";
import React, { useRef, useState } from "react";

const Register = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const repeatPasswordRef = useRef();
  const [errType, setErrType] = useState([]);

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
    console.log(errType);
  };
  return (
    <div className="registerPage">
      <div className="registerWrapper">
        <form className="register" onSubmit={submitHandler}>
          <h3 className="title">REGISTER</h3>
          <div className="inputBox">
            <div>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                ref={nameRef}
              />
              <div className="registerIcon"></div>
            </div>
            <div>
              <input
                type="email"
                name="name"
                id=""
                placeholder="Email"
                ref={emailRef}
              />
              <div className="registerIcon"></div>
            </div>
            <div>
              <input
                type="password"
                name="name"
                id=""
                placeholder="Password"
                ref={passwordRef}
              />
              <div className="registerIcon"></div>
            </div>
            <div>
              <input
                type="password"
                name="name"
                id=""
                placeholder="Repeat Password"
                ref={repeatPasswordRef}
              />
              <div className="registerIcon"></div>
            </div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
