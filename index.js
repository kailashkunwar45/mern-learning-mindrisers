import express from 'express';

const app = express();
const port = 5000;


app.get('/', (req, res) => {
  console.log(req.query);
  const num = Number(req.query.number);

  if (isNaN(num)) {
    return res.status(400).json({
      error: 'wrong Input'
    })
  }

  const square = num * num;
  res.json({ number: num, square });

});


app.listen(port, () => {
  console.log('server is running');
});