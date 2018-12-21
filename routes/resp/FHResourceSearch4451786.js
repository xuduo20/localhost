/**
 * p4451786 机酒资源
 */

const path = require('path')
const sendFilePath = filePath => path.join(__dirname, filePath)


const p4451786send = (req, res, next) => {
  let {
    IsLowPrice,
    ProductId
  } = req.body
  if( ProductId === 4451786 ){
    res.sendFile( sendFilePath('../free/p4451786/f1.html'))
  } else {
    res.sendFile( sendFilePath('../free/p4451786/f1.html'))
  }
}

const p1005564413send = (req, res, next) => {
  let {
    IsLowPrice,
    ProductId
  } = req.body
  if( ProductId === 1005564413 ){
    res.sendFile( sendFilePath('../free/p1005564413/f1.html'))
  } else {
    res.sendFile( sendFilePath('../free/p1005564413/f1.html'))
  }
}

module.exports = {
  p4451786send,
  p1005564413send
}