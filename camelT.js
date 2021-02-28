function cssStyle2DomStyle(sName) {
  let a = sName.split('-')
  if(!a[0]) a.splice(0,1)
  for (let i=1; i < a.length; i++){
    a[i] = a[i].replace(a[i][0], a[i][0].toUpperCase())
  }
  return a.join('')
}

cssStyle2DomStyle('-webkit-border-image')