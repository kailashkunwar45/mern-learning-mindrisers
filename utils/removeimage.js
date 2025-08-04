


import fs from 'fs';


export const removeImage = (imagePath) => {
  fs.unlinkSync(`./uploads/${imagePath}`);
}