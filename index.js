// import express from 'express';

// const app = express();
// const port = 5000;


// app.get('/', (req, res) => {
//   console.log(req.query);
//   const num = Number(req.query.number);

//   if (isNaN(num)) {
//     return res.status(400).json({
//       error: 'wrong Input'
//     })
//   }

//   const square = num * num;
//   res.json({ number: num, square });

// });


// app.listen(port, () => {
//   console.log('server is running');
// });

//my code


// import express from 'express';

// const app = express();
// const port = 5000;

// app.use(express.json());

// app.use('/', (req, res, next) => {
//   const { c } = req.query;

//   if (isNaN(Number(c))) {
//     return res.status(400).json({
//       error: 'wrong input'
//     });
//   }

//   next();
// });

// app.get('/', (req, res) => {
//   console.log(req.body);
//   return res.status(200).json({ message: 'k ma hency haina rwwww paraaaaaaa' });


// })

// app.get('/', (req, res) => {
//   const { c } = req.query;
//   return res.status(200).json({
//     message: Number(c) * Number(c)
//   });
// });

// app.listen(port, () => {
//   console.log('server is running');

// });



// import express from "express";

// const app = express();
// const port = 5000;

// app.get("/", (req, res) => {
//   console.log(req.query);
//   const c = String(req.query.c);
//   if (!c.trim() || !/^[a-zA-Z\s]+$/.test(c.trim())) {
//     return res.status(400).json({ error: "bhayena" });
//   }

//   res.json({ message: c.trim().toUpperCase() });
// });

// app.listen(port, () => console.log(`Server running on port ${port}`));

// MVC Model


import express from 'express';
import productRoutes from './routes/productRoutes.js';
import mongoose from 'mongoose';
import morgan from 'morgan';

const app = express();
const port = 5000;


mongoose.connect('mongodb+srv://kailashkunwar10:pass10000@clusterk.jo6p2zn.mongodb.net/Shop').then((val) => {
  app.listen(port, () => {
    console.log(' database connected server is running')
  });
}).catch((err) => {
  console.log(err);
})



app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  console.log(req.body);
  return res.status(200).json({
    message: 'welcome'
  });
});

app.use(productRoutes);




