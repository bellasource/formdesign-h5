/*
 * @Author: linZeJian
 * @Date: 2022-08-25 14:16:01
 * @LastEditors: linZeJian
 * @LastEditTime: 2022-08-25 14:16:49
 * @Description: 
 */

//时间戳转换方法 年-月-日   dateValue:时间戳数字
export function formatDate(dateValue, type) {
  if (!dateValue) {
    return ""
  }
  var date = new Date(dateValue);
  var YY = date.getFullYear();
  var MM = '-' + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  var DD = '-' + (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
  var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
  var mm = ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
  var ss = ':' + (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
  var result = ""
  switch (type) {
    case 6:
      result = YY + MM + DD + " " + hh + mm + ss;
      break;
    case 5:
      result = YY + MM + DD + " " + hh + mm;
      break;
    case 4:
      result = YY + MM + DD + " " + hh + ':00';
      break;
    case 3:
      result = YY + MM + DD;
      break;
    case 2:
      result = YY + MM;
      break;
    case 1:
      result = hh + mm + ss;
      break;
    default:
      result = YY + MM + DD + " " + hh + mm + ss;
  }
  return result
}

//时间戳转换方法 年-月-日   dateValue:时间戳数字
export function formatDateVant(dateValue, type) {
  if (!dateValue) {
    return ""
  }
  var date = new Date(dateValue);
  var YY = date.getFullYear();
  var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
  var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
  var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
  // var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
  var result = ""
  switch (type) {
    case 6:
      result = MM + "-" + DD;
      break;
    case 5:
      result = YY + "-" + MM + "-" + DD + " " + hh + ":" + mm;
      break;
    case 4:
      result = YY + "-" + MM + "-" + DD + " " + hh + ':00';
      break;
    case 3:
      result = YY + "-" + MM + "-" + DD;
      break;
    case 2:
      result = YY + "-" + MM;
      break;
    case 1:
      result = hh + ":" + mm;
      break;
    default:
      result = YY + "-" + MM + "-" + DD
  }
  return result
}