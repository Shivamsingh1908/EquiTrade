const jwt = require("jsonwebtoken");
const User = require("./model/UserModel");

const verifyUser = async (req, res) => {
  const token = req.cookies?.token;
  if (!token) return res.json({ status: false });

  try {
  const secret = process.env.JWT_SECRET || process.env.TOKEN_KEY;
  const decoded = jwt.verify(token, secret);
 // use your token secret
    const user = await User.findById(decoded.id).select("-password"); // ✅ fetch full user
    if (!user) return res.json({ status: false });

    return res.json({ status: true, user }); // ✅ send full user object
  } catch (err) {
    return res.json({ status: false });
  }
};

module.exports = { verifyUser };