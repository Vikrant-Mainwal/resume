import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.json({ success: false, message: "Token not found" });
  }

  const token = authHeader.split(' ')[1]; // Get the token from the "Bearer <token>" format

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id; // Assuming your token payload has an "id" field
    next();
  } catch (error) {
    console.log("Error verifying token", error);
    res.json({ success: false, message: "Error verifying token" });
  }
};

export default authMiddleware;
