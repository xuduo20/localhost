const express = require('express')
const router = express.Router()
let path = require('path')

let sendFilePath = filePath => path.join(__dirname, filePath)

router.post('/orderdetails/orderAsync', (req, res, next) => {
    res.sendFile( sendFilePath('json/orderAsync.json') )
  })
/*router.post('/OrderList/GetOrderList', (req, res, next) => {
    let param = JSON.parse(req.body.RequestData)
    if (param.PageNo === 1) {
        setTimeout(() => {
            res.sendFile(sendFilePath('group/GetOrderList.json'))
        }, 1000)
    } else if (param.PageNo === 2) {
        setTimeout(() => {
            res.sendFile(sendFilePath('group/GetOrderList2.json'))
        }, 1000)
    } else if (param.PageNo === 3) {
        setTimeout(() => {
            res.sendFile(sendFilePath('group/GetOrderListError.json'))
        }, 1000)
    } else {
        setTimeout(() => {
            res.sendFile(sendFilePath('group/GetOrderListEmpty.json'))
        }, 1000)
    }
})
router.post('/Material/MateriaManage', function (req, res, next) {
    let RequestData = req.body.RequestData
    let RequestDataJson = JSON.parse(RequestData);
    let {
      FileDownloadDto,
        FileDownloadDTO,
        SendMessageDto,
        FileDeleteDTO
    } = RequestDataJson
    if (FileDownloadDto) {
        let {
        ImageType
      } = FileDownloadDto

        if (ImageType === 'T') {
            // 查看
            res.sendFile(sendFilePath('group/MateriaManage.json'))
        }
    } else if (FileDownloadDTO) {
        let {
        ImageType
        } = FileDownloadDTO
        if (ImageType === 'P') {
            // 放大
            res.sendFile(sendFilePath('group/MateriaManageZoom.json'))
        }
    } else if (FileDeleteDTO) {
        // 删除
        res.sendFile(sendFilePath('group/MateriaManageDelete.json'))
    } else if (SendMessageDto) {
        // 保存
        res.sendFile(sendFilePath('group/MateriaManageSave.json'))
    } else {
        // TODO 新增
    }
});
*/

/*const FHResourceSearch = require( './resp/FHResourceSearch4451786' ) 

const AjaxGetXResource = require('./resp/AjaxGetXResource')

const AjaxGetXResourceV2 = require('./resp/AjaxGetXResourceV2')*/

/**
 * 分批加载接口
 */
/*router.post('/PartFlight/RecommendBatchSearch', (req, res, next) => {
  setTimeout(()=>{
    // res.status(502).send('Sorry! you cant see that.')
    res.sendFile( sendFilePath('free/RECOMMEND_BATCH_FLIGHT_SEARCH.html') )
  }, 1000)
})

// 资源请求
// p1005564413send  p4451786send
router.post('/FHResourceSearch/FHResourceSearch', FHResourceSearch.p1005564413send )

// X资源接口
router.post('/XResource/AjaxGetXResource', AjaxGetXResource.p4451786send)

// 新的X资源请求
// p1005564413send p4451786send
router.post('/XResource/AjaxGetXResourceV2', AjaxGetXResourceV2.p1005564413send)
*/
module.exports = router;
