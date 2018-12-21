$(document).ready(function(){

  function getFile(opt){
    $.ajax({
      type: 'post',
      url: '/getfiles',
      data:{
        type: opt.type 
      },
      dataType: 'json'
    }).done(opt.success)
  }

  // 请求自由行mock page
  // getFile({
  //   type: 'free',
  //   success(data){
  //     let html = ''
  //     data.fileList.map(_item => {
  //       html += `<li><a href="/free/${_item}" target="_blank">${_item}</a></li>`
  //     })
  //     $('#J_freePages').html(html)
  //   }
  // })

  // 请求APP端mock数据
  getFile({
    type: 'PCPage',
    success(data) {
      let html = ''
      data.fileList.map(_item => {
        html += `<li><a href="/pcpage/${_item}" target="_blank">${_item}</a></li>`
      })
      $('#J_pcpages').html(html)
    }
  })

  // 请求PC端的mock数据
  getFile({
    type: 'APPage',
    success(data) {
      let html = ''
      data.fileList.map(_item => {
        html += `<li><a href="/appage/${_item}" target="_blank">${_item}</a></li>`
      })
      $('#J_appages').html(html)
    }
  })

  // 请求团队游mock page
  // getFile({
  //   type: 'group',
  //   success(data){
  //     let html = ''
  //     data.fileList.map(_item => {
  //       html += `<li><a href="/group/${_item}" target="_blank">${_item}</a></li>`
  //     })
  //     $('#J_gropuPages').html(html)
  //   }
  // })

  // getFile({
  //   type: 'fws',
  //   success(data){
  //     let html = ''
  //     data.fileList.map(_item => {
  //       html += `<li><a href="/fws/${_item}" target="_blank">${_item}</a></li>`
  //     })
  //     $('#J_fwsPages').html(html)
  //   }
  // })
})