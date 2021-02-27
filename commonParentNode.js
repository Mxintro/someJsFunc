function commonParentNode(oNode1, oNode2) {
  while(true) {
      oNode1 = oNode1.parentNode
      if (oNode1.contains(oNode2)){
          return oNode1
      }
  }
}