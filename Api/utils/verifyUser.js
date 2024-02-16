import jwt from 'jsonwebtoken';
import errorHandler from './error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  // const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzQ5MjQ2YzUwMmI2Y2M1ZmYwNDZjNSIsImlhdCI6MTcwNzU2NjIzMH0.JWqCiXQHVEqxhsjmODVJ6Vloy9EvNyMhHlcc1yzGscI"


  //console.log(req.cookies.access_token)

  if (!token) return next(errorHandler(401, 'Unauthorized'));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, 'Forbidden'));

    req.user = user;
    next();
  });
};