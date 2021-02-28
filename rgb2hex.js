function rgb2hex(sRGB) {
  const match = /(\d+),\s*(\d+),\s*(\d+)/.exec(sRGB)
  if(!match) return sRGB
  let hexStr = '#'
  for (let i=1; i<4; i++){
    hexStr = hexStr + ('0'+(match[i]*1).toString(16)).slice(-2)
  }
  return hexStr
}

rgb2hex('dfdfd')