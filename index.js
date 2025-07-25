// fs os path

import fs from 'fs';


// file create delete update

// callback function
// const some = (func) => {

// }

// some(() => {

// })

// fs.writeFile('./sample.txt', 'hello jii', 'utf-8', (err) => {

// });

// fs.readFile('./sample.txt', 'utf-8', (err, data) => {
//   console.log(data);
// })

// fs.mkdir('./folder', (err) => {
//console.log(err);
// })

// fs.rmdir('./folder', (err) => {
//   console.log(err);
// })

// fs.appendFile('./sample.txt', 'kellojii', 'utf-8', (err) => {
//   console.log(err);
// })

// fs.unlink('./sample.txt', (err) => {
//   console.log(err);
// })

if (fs.existsSync('./sample.txt')) {
  fs.unlink('./sample.txt', (err) => {

  })
} else {
  fs.writeFile('./sample.txt', 'hii i am fine', 'utf-8', (err) => {

  })
}