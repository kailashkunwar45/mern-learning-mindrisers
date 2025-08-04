

import express from 'express';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js'
import morgan from 'morgan';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';

const app = express();
const port = 5000;

mongoose.connect('mongodb+srv://kailashkunwar10:pass10000@clusterk.jo6p2zn.mongodb.net/Shop').then((val) => {
  app.listen(port, () => {
    console.log(' database connected server is running');
  });
}).catch((err) => {
  console.log(err);
})

app.use(express.json());
app.use(morgan('dev'));
app.use(fileUpload({}));

app.get('/', (req, res) => {
  console.log(req.body);
  return res.status(200).json({ message: 'Welcome' });
});


app.use(productRoutes);
app.use(userRoutes);
app.use(orderRoutes);


