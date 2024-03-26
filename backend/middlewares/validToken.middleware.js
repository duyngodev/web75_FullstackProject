import jwt from "jsonwebtoken";
import { getSession } from "../Utils/sessionHandler.js";
import { verifyJWT } from "../Utils/jwt.utils.js";

const blacklisted = new Set();

const validToken = async (req, res, next) => {
  req.user = {};
  const { access_token: accessToken, refresh_token: refreshToken } =
    req.cookies;
  console.log(`----------------------------Access token: ${accessToken}`);
  if (!accessToken || !refreshToken) {
    return next();
  }
  if (blacklisted.has(accessToken) || blacklisted.has(refreshToken)) next();
  const { payload: user, expired } = verifyJWT(
    accessToken,
    process.env.ACCESS_KEY
  );
  if (user) {
    req.user = {
      sessionId: user.sessionId,
      userId: user.userId,
      access_token: accessToken,
      refresh_token: refreshToken,
    }; // need to access the protected route
    return next();
  }

  const { payload: refresh } =
    expired && refreshToken
      ? verifyJWT(refreshToken, process.env.REFRESH_KEY)
      : null;
  const session = await getSession(refresh.sessionId);
  if (!session) next();

  const newAccessToken = jwt.sign(
    { sessionId: session._id, userId: session.userId },
    process.env.ACCESS_KEY,
    {
      expiresIn: "5m",
    }
  );
  res.cookie("access_token", newAccessToken, {
    maxAge: 300000,
    secure: true,
    // httpOnly: true,
  });
  const decoded = verifyJWT(newAccessToken, process.env.ACCESS_KEY).payload;
  req.user = {
    sessionId: decoded.sessionId,
    userId: decoded.userId,
    access_token: newAccessToken,
    refresh_token: refreshToken,
  }; //need to access the protected route
  return next();
};
export { validToken, blacklisted };
