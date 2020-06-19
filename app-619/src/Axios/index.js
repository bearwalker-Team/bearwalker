/* 序列化字符串的方法 */
const serialize = (data) => {
  var urlstr = ''
  for (var item in data) {
    urlstr += item + '=' + data[item] + '&'
  }
  return urlstr.replace(/&$/, '')
}
export {
  serialize
}
