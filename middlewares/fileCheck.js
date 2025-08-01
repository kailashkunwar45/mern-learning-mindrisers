import path from 'path';
import { v4 as uuidv4 } from 'uuid';
const supported = ['.jpg', '.webp', '.jpeg', '.png', '.gif'];

export const fileCheck = (req, res, next) => {
  const file = req.files?.image;

  if (!file) return res.status(400).json({ message: 'please provide image' });



  const extType = path.extname(file.name);

  if (!supported.includes(extType)) return res.status(400).json({ message: 'please provide valid image' });


  const imagePath = `${uuidv4()}-${file.name}`
  file.mv(`./uploads/${imagePath}`, (err) => {
    if (err) return res.status(400).json({ message: `${err}` });
    req.imagePath = imagePath;
    next();
  })




}