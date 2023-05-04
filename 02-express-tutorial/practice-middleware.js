const express = require('express')
const app = express()
const logged = require('./logged')

app.use(logged)



  
  app.get('/', (req, res) => {
    res.send('Home')
  })
 
  
  app.listen(3000, () => {
    console.log('Server is listening on port 3000....')
  })

  