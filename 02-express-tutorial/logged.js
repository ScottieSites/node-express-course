const logged = (req, res, next) => {
    let logStatement  = 'This is my statement'

    console.log(logStatement)
    
    next()
  }


  module.exports = logged