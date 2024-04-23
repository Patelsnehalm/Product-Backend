import jwt from 'jsonwebtoken';

const JWT_SECRET = 'Snehal@2010';

const generateToken = (userId:String) => {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
  };

const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};

export default {generateToken,verifyToken};