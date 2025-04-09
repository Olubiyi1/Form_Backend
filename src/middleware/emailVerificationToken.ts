import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';

// Middleware to generate verification token
export const generateVerificationTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;

    // Generate a secure verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');

    // Attach the verification token to the request object for use in the controller
    req.body.verificationToken = verificationToken;

    // Call the next middleware (or controller)
    next();
  } catch (error) {
    console.error('Error in token generation middleware:', error);
    return res.status(500).json({ message: 'Something went wrong, please try again later.' });
  }
};
