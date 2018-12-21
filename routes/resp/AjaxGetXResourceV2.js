/**
 * 新的x资源请求
 */

const path = require('path')
const sendFilePath = filePath => path.join(__dirname, filePath)

const p4451786send = (req, res, next) => {
  const {
    shoppingid
  } = req.body
  if( shoppingid === '0231c2d6eeb447a99b8e52739550df9c' ){
    setTimeout(()=>{
      res.sendFile( sendFilePath('../free/p4451786/x1.json') )
    }, 1000)
  } else if ( shoppingid === '81b871f9647e46ca9f6caee661ca4d49' ){
    setTimeout(()=>{
      res.sendFile( sendFilePath('../free/p4451786/x2.json') )
    }, 1000)
  } else {
    setTimeout(()=>{
      res.sendFile( sendFilePath('../free/p4451786/x2.json') )
    }, 1000)
  }
}

const p1005564413send = (req, res, next) => {
  const {
    shoppingid
  } = req.body
  if( shoppingid === 'a0591b50a6094e6f8a3abacc70c37374' ){
    setTimeout(()=>{
      res.sendFile( sendFilePath('../free/p1005564413/x1.json') )
    }, 1000)
  } else if ( shoppingid === '81b871f9647e46ca9f6caee661ca4d49' ){
    setTimeout(()=>{
      res.sendFile( sendFilePath('../free/p4451786/x2.json') )
    }, 1000)
  } else {
    setTimeout(()=>{
      res.sendFile( sendFilePath('../free/p4451786/x2.json') )
    }, 1000)
  }
}

module.exports = {
  p4451786send,
  p1005564413send
}