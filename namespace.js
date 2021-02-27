function namespace(oNamespace, sPackage) {
  const keys = sPackage.split('.')
  let temp = oNamespace

  for (let i of keys) {
    if (!(temp[i] instanceof Object)){
      temp[i] = {}
      temp = temp[i]
    }
  }
  return oNamespace
}