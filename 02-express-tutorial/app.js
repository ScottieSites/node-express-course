// const http = require('http')

// const server = http.createServer((req, res) => {
// // console.log(req.method);
// const url = req.url;
// //home page
// if(url === '/') {
//     res.writeHead(200, {'content-type':'text/html'})
//     res.write('<h1>home page</h1>')
//     res.end()

// } else if(url === '/about') {
//     res.writeHead(200, {'content-type':'text/html'})
//     res.write('<h1>about page</h1>')
//     res.end()
// }
// else {
//     res.writeHead(404, {'content-type':'text/html'})
//     res.write('<h1>page not found</h1>')
//     res.end()
// }

// })

// server.listen(5000)








// const express = require('express');
// const app = express()

// app.get('/', (req, res) => {
//     console.log('user hit the resource');
// res.status(404).send('Home Page')
  
// })

// app.get('/about', (req, res) => {
//     res.status(404).send('About Page')
// })

// app.all('*', (req, res) => {
//     res.status(404).send('<h1>resource not found</h1>')
// })

// app.listen(5000, () => {
//   console.log('server is listening on port 5000...');
// })


const express = require('express');
const path = require('path')
const app = express()

// app.get('/', (req,res) => {
// res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

// app.all('*', (req, res) => {
//  res.status(404).send('<h1>resource not found</h1>')
//  })


app.listen(5000, () => {
    console.log('sever is listening on port 5000');
})




