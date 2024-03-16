import UserModel from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import { createSession } from "../Utils/sessionHandler.js";

// login
const userLogin = async (req, res) => {
  const errorTypeIn = [];
  const { email, password } = req.body;
  if (!email || !password) {
    errorTypeIn = ["email", "password"];
    return res.status(200).send({ data: errorTypeIn });
  }
  const user = await UserModel.findOne({ email: email });
  if (!user) {
    errorTypeIn.push("email");
    return res.status(200).send({ data: errorTypeIn });
  }

  const compare = await bcrypt.compare(password, user.password);
  if (!compare) {
    errorTypeIn.push("password");
    return res.status(200).send({ data: errorTypeIn });
  }
  // create session
  const session = await createSession(user._id);
  //create token
  const accessToken = jwt.sign(
    { userId: user._id, sessionId: session._id },
    process.env.ACCESS_KEY,
    {
      expiresIn: "5s",
    }
  );
  const refressToken = jwt.sign(
    { sessionId: session._id },
    process.env.REFRESH_KEY,
    {
      expiresIn: "1h",
    }
  );
  // save token to ccookie
  res.cookie("access_token", accessToken, {
    maxAge: 300000,
    httpOnly: true,
  });
  res.cookie("refresh_token", refressToken, {
    maxAge: 3.154e10,
    httpOnly: true,
  });
  res.send(session);
};

// logout
const userLogout = async (req, res) => {
  await res.cookie("access_token", "", {
    maxAge: 0,
    httpOnly: true,
  });

  res.send("log out successfully");
};

// signup
const userSignup = async (req, res) => {
  const { name, email, password, repeatPassword } = req.body;
  // check an array off error to FE render red outline in the form
  if (!name || !email || !password)
    throw new Error("Please enter all required fields");
  const exist = await UserModel.findOne({ email });
  if (exist) throw new Error("Email address already in use");
  if (!validator.isStrongPassword(password))
    throw new Error("Please enter a strong password");
  if (password !== repeatPassword)
    throw new Error("please repeat the password");
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  await UserModel.create({ name, password: hash, email });
  res.status(200).send("signup successful");
};

export { userLogin, userSignup, userLogout };
