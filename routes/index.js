const express = require('express')
const router = express.Router()
const readdirp = require('readdirp')
let path = require('path')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'ctrip' });
});

router.post('/getfiles', (req, res, next) => {
  let {
    type
  } = req.body
  // let root = './public/'
  // if(type === 'free'){
  //   root = './public/free'
  // } else if( type === 'group' ){
  //   root = './public/group'
  // } else if (type === 'fws'){
  //   root = './public/fws'
  // }
  let root = './public'
  if(type === 'APPage') {
    root = './public/APPage'
  } else if(type === 'PCPage') {
    root = './public/PCPage'
  }
  readdirp({ root, fileFilter: '*.html' },(fileInfo) => {
    //console.log(fileInfo)
  },(_err, _res) => {
    //console.log(_err)
    let fileArray = []
    let {
      files
    } = _res
    files.map(({name}) => {
      fileArray.push(name)
    })
    res.send({"fileList":fileArray})
  })
});

let sendFilePath = filePath => {
  return path.join(__dirname, filePath)
}



module.exports = router;
