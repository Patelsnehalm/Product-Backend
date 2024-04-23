import { Request, Response, NextFunction } from 'express';
import jwt from '../utils/jwt';


const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const userId = jwt.verifyToken(token);
    //req.userId = userId;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;
