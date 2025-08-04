import jwt from 'jsonwebtoken';


export const checkUser = (req, res, next) => {

  const token = req.headers.token;
  const decode = jwt.decode(token, 'token');
  if (!decode) return res.status(401).json({ message: 'Unauthorized' });
  req.userId = decode.id;
  req.role = decode.role;
  next();
}

export const checkAdmin = (req, res, next) => {
  if (req.role !== 'Admin') return res.status(401).json({ message: 'Unauthorized' })
  next();
}