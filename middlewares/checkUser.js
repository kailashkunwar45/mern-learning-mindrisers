import jwt from "jsonwebtoken";

export const checkUser = (req, res, next) => {
  const token = req.headers.token;
  if (!token)
    return res.status(401).json({ message: "Token missing in headers" });

  try {
    const decoded = jwt.verify(token, "token");
    if (!decoded) {
      return res.status(401).json({ message: "Failed to decode token" });
    }
    if (decoded.role !== "User") {
      return res.status(403).json({ message: "Access denied: Users only" });
    }

    req.userId = decoded.id;
    req.role = decoded.role;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token", error: err.message });
  }
};







export const checkAdmin = (req, res, next) => {
  if (req.role !== 'Admin') return res.status(401).json({ message: 'Unauthorized' })
  next();
}