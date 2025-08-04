import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isExist = await User.findOne({ email: email });
    if (!isExist) return res.status(404).json({ message: 'User doesn\'t exist' });

    const pass = bcrypt.compareSync(password, isExist.password);
    if (!pass) return res.status(401).json({ message: 'Invalid Credential' });

    const token = jwt.sign({
      role: isExist.role,
      id: isExist.id
    }, 'token');
    return res.status(200).json({
      token,
      email: isExist.email,
      role: isExist.role,
      username: isExist.username
    });

  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }

}

export const registerUser = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const isExist = await User.findOne({ email: email });
    if (isExist) return res.status(409).json({ message: 'User Already Exist' });

    const hashPass = bcrypt.hashSync(password, 10);

    await User.create({
      email,
      password: hashPass,
      username
    });
    return res.status(201).json({ message: 'registered successfully' });

  } catch (err) {
    return res.status(400).json({ message: `${err}` });

  }

}