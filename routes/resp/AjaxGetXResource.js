/**
 * 老的x资源请求
 */

const path = require('path')
const sendFilePath = filePath => path.join(__dirname, filePath)

const p4451786send = (req, res, next) => {
  let {
    shoppingid,
    isLowPrice
  } = req.body

  if( shoppingid === '2c82d9d96d2f43938e669d8b0b0c6cd7'){
    setTimeout(()=>{
      res.sendFile( sendFilePath('../json/AjaxGetXResource.json') )
    }, 100)
    
  } else if( shoppingid === '30408710d4ff46abb16851b2f1779ab1' ) {
    setTimeout(()=>{
      res.sendFile( sendFilePath('../json/AjaxGetXResourceLowPrice4451786.json') )
    }, 100)
    
  } else if( shoppingid === '6aa192136389400693ffb5942fad5235'){
    setTimeout(()=>{
      res.sendFile( sendFilePath('../json/AjaxGetXResourceLowPrice44517862.json') )
    },100)
    
  } else if( shoppingid === '1b4012d1a565404f863048800c3cc983' ){
    res.sendFile( sendFilePath('../json/AjaxGetXResource92614.json') )
  }else if( shoppingid === 'c25e42408bac428da7d380a696651d1b' ){
    setTimeout(()=>{
      res.sendFile( sendFilePath('../json/AjaxGetXResourcec25e424.json') )
    },100)
  } else {
    setTimeout(()=>{
      res.sendFile( sendFilePath('../json/AjaxGetXResource4451786.json') )
    },100)
  } 
}


module.exports = {
  p4451786send
}