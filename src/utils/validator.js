// 前端验证方法库

import fn from './fn'

const validator = {}

// 所有验证方法验证“不”通过均返回true，而非false

// 验证手机号
validator.phoneNum = (phonenum, text) => {
  if (typeof phonenum !== 'string' && typeof phonenum !== 'number') {
    console.error('手机号验证参数类型错误')
    return false
  }
  
  let reg = /^1[0-9]{10}$/
  if (!reg.test(phonenum)) {
    console.log('validator error phonenum ' + text)
    return true
  }
}

// 验证邮箱
validator.eMail = (email, text) => {
  if (typeof email !== 'string' && typeof email !== 'number') {
    console.error('email验证参数类型错误')
    return false
  }

  let reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
  if (!reg.test(email)) {
    console.log('validator error email ' + text)
    return true
  }
}

// 验证字符串长度
validator.strLength = (string, num, text) => {
  if (fn.trim(string).length != num) {
    console.log('validator error lenght ' + num + ' ' + text)
    return true
  }
}

// 验证字符串最小长度
validator.strMinLength = (string, min, text) => {
  if (fn.trim(string).length < min) {
    console.log('validator error min lenght ' + min + ' ' + text)
    return true
  }
}

// 验证密码
validator.password = (password, text) => {
  let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]*$/

  if (!reg.test(password)) {
    console.log('validator error password ' + text)
    return true
  }
}

// 验证必填
validator.required = (string, text) => {
  if (fn.trim(String(string)).length === 0) {
    console.log('validator error required ' + text)
    return true
  }
}

// 验证数字字符串
validator.number = (number, text) => {
  let reg = /^[0-9]*$/

  if (!reg.test(number)) {
    console.log('validator error number ' + text)
    return true
  }
}

export default validator