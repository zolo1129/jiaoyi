// import XLSX from 'xlsx'

// 公共方法、算法库'

const fn = {}

fn.ID = ''

fn.add = (...arg) => {
  let result = 0

  for (let i = 0; i < arg.length; i++) {
    result += arg[i]
  }

  return result
}

// 清除字符串两边空格
fn.trim = (string) => {
  return string.replace(/^\s+|\s+$/g, '')
}

// 生成全局递增数id
fn.createId = () => {
  return fn.ID++
}

// 生成随机字符串
fn.randomString = (len) => {
  len = len || 32
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let charsLen = chars.length
  let str = ''
  for(let i = 0; i < len; i++) {
    str += chars.charAt(Math.floor(Math.random() * charsLen))
  }

  return str
}

fn.clearTimer = timer => {
  if (timer) {
    console.log('clearTimer')
    clearInterval(timer)
  }
}

// 截取字符串
fn.cutString = (string, start, end) => {
  return string.substring(start, end || string.length)
}

// 数字补零
fn.coverNum = (num, digit=10) => {
  let cover = ''
  for (let i = 1; i < String(digit).length; i++) {
    cover += '0'
  }
  return num < digit ? cover + num : num
}

// 时间戳转日器
// yyyy-mm-dd
fn.formatTime = (timestamp) => {
  let date = new Date(timestamp)
  let d = date.toLocaleDateString()
  let da = d.split('/')
  let array = []

  da.forEach(item => {
    array.push(fn.coverNum(Number(item)))
  })

  return array.join('-')
}

// 时间戳转日器
// yyyy-mm
fn.formatTimeMonth = (timestamp) => {
  let date = new Date(timestamp)
  let d = date.toLocaleDateString()
  let da = d.split('/')
  let array = []

  da.forEach(item => {
    array.push(fn.coverNum(Number(item)))
  })

  array.splice(array.length - 1, 1)

  return array.join('-')
}

// Date()转日期
// yyyy-mm-dd
fn.formatDate = (date) => {
  let d = date.toLocaleDateString()
  let da = d.split('/')
  let array = []

  da.forEach(item => {
    array.push(fn.coverNum(Number(item)))
  })

  return array.join('-')
}

// 日期转时间戳
// yyyy-mm-dd ==> 时间戳
fn.formatTimstamp = (date) => {
  let d = date.split('-').join('/')

  return new Date(d).getTime()
}

// 获取每月有几天
// month:Number\String
fn.getCountDays = (month) => {
  let date = new Date()

  date.setMonth(month)
  date.setDate(0)

  return date.getDate()
}

// 导出图表
// JSON装XLSX
// fn.exportXlsx = (json, name) => {
//   let sheet = XLSX.utils.json_to_sheet(json)

//   fn.openDownloadDialog(fn.sheet2blob(sheet), `${name}.xlsx`)
// }

// fn.sheet2blob = (sheet, sheetName) => {
//   sheetName = sheetName || 'sheet1'

//   let workbook = {
//     SheetNames: [sheetName],
//     Sheets: {}
//   }

//   workbook.Sheets[sheetName] = sheet

//   // 生成excel的配置项
//   let wopts = {
//     bookType: 'xlsx', // 要生成的文件类型
//     bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
//     type: 'binary'
//   }
//   let wbout = XLSX.write(workbook, wopts)
//   let blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" })

//   // 字符串转ArrayBuffer
//   function s2ab(s) {
//     let buf = new ArrayBuffer(s.length)
//     let view = new Uint8Array(buf)
//     for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF
//     return buf
//   }

//   return blob
// }

// 下载
fn.openDownloadDialog = (url, saveName) => {
  if (typeof url == 'object' && url instanceof Blob) {
    url = URL.createObjectURL(url); // 创建blob地址
  }

  var aLink = document.createElement('a');
  aLink.href = url;
  aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
  var event;
  if (window.MouseEvent) event = new MouseEvent('click');
  else {
    event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  }
  aLink.dispatchEvent(event);
}

// 数字添加千分符
// strNum: String类型数字
fn.numThousand = (strNum) => {
  let reg = /^(-?\d+)(.\d+)?$/
  let neg = ''
  let array = strNum.split('.')
  let index = 0
  let string = []

  if (!reg.test(strNum)) {
    console.warn('type of strNum is error')
    return
  }

  if (strNum.indexOf('-') !== -1) {
    strNum = strNum.slice(1)
    neg = '-'
  }

  for(let i = array[0].length - 1; i >= 0; i--) {
    index++

    string.unshift(array[0][i])

    if (index % 3 === 0 && i !== 0) {
      string.unshift(',')
    }
  }

  let decimal = array[1] ? '.' + array[1] : ''

  let result = neg == '-' ? '-' + string.join('') + decimal : string.join('') + decimal

  return result
}

export default fn
