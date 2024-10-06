import jwt from 'jsonwebtoken';

// Function to create a JWT token
const createToken = (data) => {
    return jwt.sign({ id: data.id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
  };
  

// Function to verify a JWT token
const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET_KEY);  // Verify token using the secret key
    } catch (error) {
        console.error("Token verification failed:", error);
        return null;
    }
};

export {
    createToken,
    verifyToken
};
