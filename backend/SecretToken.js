require("dotenv").config();
const jwt = require("jsonwebtoken");

const createSecretToken = (id) => {
  const secret = process.env.JWT_SECRET || process.env.TOKEN_KEY;
  if (!secret) throw new Error("JWT_SECRET is not configured");

  return jwt.sign({ id }, secret, {
    expiresIn: 3 * 24 * 60 * 60, // 3 days
  });
};

module.exports = { createSecretToken };