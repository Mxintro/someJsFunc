function functionFunction(str) {
  const out = []
  out.push(str)
  return function(s) {
      out.push(s)
      return out.join(',')
  }
}

