function formatDate(date, format) {
  const year = date.getFullYear() + ''
  if(/(^y+)/.test(format)){
    format = format.replace(RegExp.$1, year.substring(4-RegExp.$1.length))
  }
  const getD = {
    'M': date.getMonth()+1,
    'd': date.getDay(),
    'H': date.getHours(),
    'h': date.getHours()%12,
    'm': date.getMinutes(),
    's': date.getSeconds()
  }
  for (let key in getD) {
    if(new RegExp(`(${key}+)`).test(format)){
      const str = getD[key] + ''
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? str : ('00' + str).substring(str.length))
    }
  }
   format = format.replace('w',['日','一','二','三','四','五','六'][date.getDay()])
    
  return format
}

//消耗更少
function formatDate1(date, format) {
  const year = date.getFullYear() + ''
  if(/(^y+)/.test(format)){
    format = format.replace(RegExp.$1, year.substring(4-RegExp.$1.length))
  }
  const getD = {
    'M': date.getMonth()+1,
    'd': date.getDay(),
    'H': date.getHours(),
    'h': date.getHours()%12,
    'm': date.getMinutes(),
    's': date.getSeconds()
  }
  for (let key in getD) {
    if(new RegExp(`(${key}+)`).test(format)){
      const str = getD[key] + ''
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? str : ('00' + str).substring(str.length))
    }
  }
   format = format.replace('w',['日','一','二','三','四','五','六'][date.getDay()])
    
  return format
}
formatDate(new Date(1409894060000), 'yyyy-M-d HH:mm:ss 星期w')