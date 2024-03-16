import UserModel from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import { createSession, invalidateSession } from "../Utils/sessionHandler.js";
import { blacklisted } from "../middlewares/validToken.middleware.js";

// login
const userLogin = async (req, res) => {
  const errorTypeIn = [];
  const { email, password } = req.body;
  if (!email && !password) return res.status(400).send(["email", "password"]);
  const user = await UserModel.findOne({ email: email });
  if (!user) return res.status(400).send(["email", "password"]);
  if (user && !password) return res.status(400).send(["password"]);
  const compare = await bcrypt.compare(password, user.password);
  if (!compare) return res.status(400).send(["password"]);

  // create session
  const session = await createSession(user._id);
  //create token
  const accessToken = jwt.sign(
    { userId: user._id, sessionId: session._id },
    process.env.ACCESS_KEY,
    {
      expiresIn: "5m",
    }
  );
  const refressToken = jwt.sign(
    { sessionId: session._id },
    process.env.REFRESH_KEY,
    {
      expiresIn: "3h",
    }
  );
  // save token to ccookie
  res.cookie("access_token", accessToken, {
    maxAge: 300000,
    secure: true,
    // domain: "localhost",
    // path: "/",
    httpOnly: true,
  });
  res.cookie("refresh_token", refressToken, {
    maxAge: 3.154e10,
    secure: true,
    // domain: "localhost",
    // path: "/",
    httpOnly: true,
  });
  res.send(session);
};

// logout
const userLogout = async (req, res) => {
  // console.log(req.user);
  const { sessionId } = req.user;
  await invalidateSession(sessionId);
  blacklisted.add(req.user.access_token);
  blacklisted.add(req.user.refresh_token);

  await res.cookie("access_token", "", {
    maxAge: 0,
    secure: true,

    // httpOnly: true,
  });

  res.send("log out successfully");
};

// signup
const userSignup = async (req, res) => {
  const { name, email, password, repeatPassword } = req.body;
  // check an array off error to FE render red outline in the form

  if (!name || !email || !password)
    return res
      .status(400)
      .send(["email", "password", "name", "repeatPassword"]);
  const exist = await UserModel.findOne({ email });

  if (exist) return res.status(400).send(["email"]);
  if (!validator.isStrongPassword) return res.status(400).send(["password"]);
  if (password !== repeatPassword)
    return res.status(400).send(["repeatPassword"]);

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  await UserModel.create({ name, password: hash, email });

  return res.status(200).send("signup successful");
};

export { userLogin, userSignup, userLogout };
