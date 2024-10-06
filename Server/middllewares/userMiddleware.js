import { verifyToken } from '../utils/jwt.js'; // Ensure the correct import

const authentication = async (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Extract token from the Bearer token
  console.log("Token from request:", token); // Log the token

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = verifyToken(token); // Decode the token
    console.log("Decoded Token:", decoded); // Log the decoded token

    if (!decoded || !decoded.id) { // Check if decoded has 'id'
      return res.status(401).json({ message: 'Token is not valid' });
    }

    req.user = decoded; // Set req.user
    console.log("Request User:", req.user); // Log the req.user to verify it was set
    next();
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(401).json({ message: 'Token verification failed', error: error.message });
  }
};

export { authentication };
